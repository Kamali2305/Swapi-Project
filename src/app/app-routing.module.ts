import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { StarshipComponent } from './core/starship/starship.component';
import { StarshipsComponent } from './core/starships/starships.component';
import { StarshipUpsertComponent } from './core/starship-upsert/starship-upsert.component';

const appRoutes: Routes = [
  {
    path: '',
    component: StarshipsComponent,
  },
  {
    path: 'starship/upsert',
    component: StarshipUpsertComponent,
  },
  {
    path: 'starship/:id/:isNew',
    component: StarshipComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
