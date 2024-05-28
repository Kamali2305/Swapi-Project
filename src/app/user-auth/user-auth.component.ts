import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IUser } from '../_models/user.model';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrl: './user-auth.component.css'
})
export class UserAuthComponent {
  isRegisterMode: boolean = false;
  user: IUser={ emailAddress:'', password:''};
  @ViewChild('f') authForm: NgForm;

  constructor(private authService: AuthService ){}

  registerToggle(){
    this.isRegisterMode = !this.isRegisterMode;
   

   
  }
 onSubmit(){
    this.user.emailAddress = this.authForm.value.emailAddress;
    this.user.password = this.authForm.value.userPassword;
    if (this.isRegisterMode) {
      this.authService.register(this.user);
    } else{

      this.authService.login(this.user);

    }

  }

}
