import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { StarshipComponent } from './core/starship/starship.component';
import { StarshipsComponent } from './core/starships/starships.component';
import { StarshipUpsertComponent } from './core/starship-upsert/starship-upsert.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { authGuard } from './_guards/auth.guard';

const appRoutes: Routes = [
  {
    path: '',
    component: StarshipsComponent,
  },
  {
    path: 'user-auth',
    component: UserAuthComponent,
  },
  

  {
    path: 'starship/upsert',
    component: StarshipUpsertComponent,
    canActivate: [authGuard],
  },
  {
    path: 'starship/:id/:isNew',
    component: StarshipComponent,
    //canActivate: [authGuard],
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
