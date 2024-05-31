import { Component } from '@angular/core';
import { IStarship } from '../../_models/response';
import { StarwarService } from '../../_services/starwar.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-starship',
  templateUrl: './starship.component.html',
  styleUrl: './starship.component.css',
})
export class StarshipComponent {
  id: string = '';
  isNew: boolean;
  starship: IStarship = null;
  //public spinner: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private starwarService: StarwarService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      this.isNew = params['isNew'] === 'true';
      this.loadStarship(this.id, this.isNew);

     
      
    });
    console.log('messagetest');
  }

  loadStarship(id: string, isNew: boolean) {
    if (isNew) {
      this.starship = this.starwarService.getStarshipsByIdLC(+id);
      
      
    } else {
      this.starwarService
        .getStarshipsById(id)
        .subscribe((response: IStarship) => {
          this.starship = response;
          
        });
    }
  }
}
