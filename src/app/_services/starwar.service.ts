import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IStarship, StarshipAPIResponse } from '../_models/response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StarwarService {
  baseURL = 'https://swapi.dev/api';
  starships: IStarship[] = [];

  constructor(private httpClient: HttpClient) {}

  getStarships() {
    return this.httpClient.get(this.baseURL + '/starships/');
  }

  getStarshipsById(id: string) {
    return this.httpClient.get(this.baseURL + '/starships/' + id);
  }

  getStarshipsByIdLC(id: number) {
    return this.starships.find((x) => x.id === id);
  }

  addStarship(starship: IStarship): boolean {
    if (
      !this.starships.some(
        (existingStarship) => existingStarship.url === starship.url
      )
    ) {
      starship.id = Math.random();
      starship.isNew = true;
      this.starships.push(starship);
      return true;
    } else {
      return false;
    }
  }

  removeStarship(url: string) {
    const index = this.starships.findIndex((x) => x.url === url);

    if (index !== -1) {
      this.starships.splice(index, 1);
    }
  }
}
