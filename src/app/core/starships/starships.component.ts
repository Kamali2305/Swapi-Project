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
 public spinner: boolean = false;
  
  constructor(
    private starwarsService: StarwarService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadData();
   // this.isLoading = true;
  }
  

  loadData() {
    if (!this.isPersonalList) {
      this.starwarsService
        .getStarships()
        .subscribe((response: StarshipAPIResponse) => {
         
          setTimeout(()=>{
            this.starships = response.results;
          },1000)

          setTimeout(()=>{
            this.spinner = true;
          },1000)
      });
    } else {
      this.starships = this.starwarsService.starships;
      //this.isLoading = false;
    }
  }

  listToggle() {
    this.isPersonalList = !this.isPersonalList;
    this.loadData();
  }



crewTotalMin(): number {
  let sum: number = 0;
  for (let i = 0; i < this.starships.length; i++) {
    if (this.starships[i].crew) {
      // Remove commas from crew string
      const crewWithoutCommas = this.removeCommasFromString(this.starships[i].crew.toString());
      // Split the crew string into individual characters
      const crewMembers = crewWithoutCommas.split(',');

      // Loop through each character and add numeric values to the sum
      for (let j = 0; j < crewMembers.length; j++) {
        // Check if crew member is a range
        if (crewMembers[j].includes('-')) {
          // Split the range into minimum and maximum values
          const [min, max] = crewMembers[j].split('-').map(Number);
          // Add the minimum value to the sum
          sum += min;
        } else {
          // If crew member is not a range, directly add its value to the sum
          const crewMember = parseFloat(crewMembers[j].trim());
          if (!isNaN(crewMember)) {
            sum += crewMember;
          }
        }
      }
    }
  }
  return sum;
}

crewTotalMax(): number {
  let sum: number = 0;
  for (let i = 0; i < this.starships.length; i++) {
    if (this.starships[i].crew) {
      // Remove commas from crew string
      const crewWithoutCommas = this.removeCommasFromString(this.starships[i].crew.toString());
      // Split the crew string into individual crew members
      const crewMembers = crewWithoutCommas.split(',');

      // Loop through each crew member and add numeric values to the sum
      for (let j = 0; j < crewMembers.length; j++) {
        // Check if crew member is a range
        if (crewMembers[j].includes('-')) {
          // Split the range into minimum and maximum values
          const [min, max] = crewMembers[j].split('-').map(Number);
          // Add the maximum value to the sum
          sum += max;
        } else {
          // If crew member is not a range, directly add its value to the sum
          const crewMember = parseFloat(crewMembers[j].trim());
          if (!isNaN(crewMember)) {
            sum += crewMember;
          }
        }
      }
    }
  }
  return sum;
}

removeCommasFromString(str: string): string {
  return str.replace(/,/g, '');
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
