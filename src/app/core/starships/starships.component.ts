import { Component } from '@angular/core';
import { StarwarService } from '../../_services/starwar.service';
import { IStarship, StarshipAPIResponse } from '../../_models/response';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrl: './starships.component.css',
})
export class StarshipsComponent {
  starships: IStarship[] = [];
  isPersonalList: boolean = false;
  searchQuery: string = '';
  sortByKey: string = '';
  sortAsc: boolean = true;
  constructor(
    private starwarsService: StarwarService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    if (!this.isPersonalList) {
      this.starwarsService
        .getStarships()
        .subscribe((response: StarshipAPIResponse) => {
          this.starships = response.results;
        });
    } else {
      this.starships = this.starwarsService.starships;
    }
  }

  listToggle() {
    this.isPersonalList = !this.isPersonalList;
    this.loadData();
  }

  onAdd(starship: IStarship) {
    const result: boolean = this.starwarsService.addStarship(starship);
    if (result) {
      this.toastr.success('Add to personal List');
    } else {
      this.toastr.warning('Already added in personal List');
    }
  }

  onDelete(url: string) {
    this.starwarsService.removeStarship(url);
    this.toastr.error('Removed from personal List');
  }

  onSearch() {
    if (this.searchQuery.trim() !== '') {
      this.starships = this.starships.filter((starship) =>
        starship.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    } else {
      this.loadData();
    }
  }

  onReset() {
    this.searchQuery = '';
    this.loadData();
  }

  sortBy(key: string) {
    if (this.sortByKey === key) {
      this.sortAsc = !this.sortAsc;
    } else {
      this.sortByKey = key;
      this.sortAsc = true;
    }

    this.starships.sort((a, b) => {
      const aValue = a[this.sortByKey];
      const bValue = b[this.sortByKey];

      if (this.sortAsc) {
        if (aValue < bValue) return -1;
        if (aValue > bValue) return 1;
      } else {
        if (aValue > bValue) return -1;
        if (aValue < bValue) return 1;
      }
      return 0;
    });
  }

  onDetails(starship: IStarship) {
    if (!starship.isNew) {
      const segments = starship.url.split('/');
      const id = segments[segments.length - 2];
      this.router.navigate(['starship', id, false]);
    } else {
      this.router.navigate(['starship', starship.id, true]);
    }
  }
}
