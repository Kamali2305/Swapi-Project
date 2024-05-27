import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { StarshipComponent } from './core/starship/starship.component';
import { StarshipsComponent } from './core/starships/starships.component';
import { StarshipUpsertComponent } from './core/starship-upsert/starship-upsert.component';
import { NotFoundComponent } from './core/not-found/not-found.component';

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

  {
    path: 'not-found',
    component: NotFoundComponent,
  },
  {
    path: '**',
    redirectTo: 'not-found',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
