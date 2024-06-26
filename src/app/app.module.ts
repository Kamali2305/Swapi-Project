import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';
import { StarshipsComponent } from './core/starships/starships.component';
import { StarshipComponent } from './core/starship/starship.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StarshipUpsertComponent } from './core/starship-upsert/starship-upsert.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { FooterComponent } from './core/footer/footer.component';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { SpinnerComponent } from './core/spinner/spinner.component';
import { errorInterceptor } from './_interceptor/error.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    StarshipsComponent,
    StarshipComponent,
    NavbarComponent,
    StarshipUpsertComponent,
    NotFoundComponent,
    FooterComponent,
    UserAuthComponent,
    SpinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      closeButton: true,
      positionClass: 'toast-bottom-right',
    }),
  ],
  providers: [provideHttpClient(withInterceptors([errorInterceptor]))],
  bootstrap: [AppComponent],
})
export class AppModule {}
