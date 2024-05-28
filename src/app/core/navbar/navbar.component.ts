import { Component } from '@angular/core';
import { AuthService } from '../../_services/auth.service';
import { ICurrentUser } from '../../_models/user.model';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  user: ICurrentUser;
  userSub: Subscription;

  constructor(private authService: AuthService, private router:Router, private toastr:ToastrService){}

  ngOnInit(){

    this.authService.currentUser$.subscribe((currentUser:ICurrentUser)=>{
      this.user = currentUser;
    });
  }

  onLogout(){

    this.authService.logout();
    this.toastr.warning('Bye,have a great time');
    this.router.navigateByUrl('/');
  }

  ngOnDestroy(){
    this.userSub.unsubscribe();
  }

}
