import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { StarwarService } from '../../_services/starwar.service';
import { Router } from '@angular/router';
import { LoggerService } from '../../_services/logger.service';

@Component({
  selector: 'app-starship-upsert',
  templateUrl: './starship-upsert.component.html',
  styleUrl: './starship-upsert.component.css',
})
export class StarshipUpsertComponent {
  form: FormGroup;

  constructor(private starwarService: StarwarService, private loggerService: LoggerService, private router: Router) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.form = new FormGroup({
      name: new FormControl(null, Validators.required),
      model: new FormControl(),
      manufacturer: new FormControl(),
      cost_in_credits: new FormControl(),
      length: new FormControl(),
      max_atmosphering_speed: new FormControl(),
      crew: new FormControl(null,[Validators.required,
        Validators.maxLength(4)]),
      passengers: new FormControl(),
      cargo_capacity: new FormControl(),
      consumables: new FormControl(),
      hyperdrive_rating: new FormControl(),
      MGLT: new FormControl(),
      starship_class: new FormControl(),
      created: new FormControl(),
      edited: new FormControl(),
      url: new FormControl(),
      pilots: new FormArray([]),
      films: new FormArray([]),
    });
  }

  // onAddPilot() {
  //   (<FormArray>this.form.get('pilots')).push(new FormControl(''));
  // }

  // onAddFilm() {
  //   (<FormArray>this.form.get('films')).push(new FormControl(''));
  // }

  // get pilotsControls() {
  //   return (<FormArray>this.form.get('pilots')).controls;
  // }

  // get filmsControls() {
  //   return (<FormArray>this.form.get('films')).controls;
  // }

  onSubmit() {
    console.log(this.form.value);
    this.starwarService.addStarship(this.form.value);
    this.loggerService.logInformation('Starship Added');
    this.router.navigateByUrl('/');
  }
}
