import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { ICurrentUser, IUser } from "../_models/user.model";



const BaseUrl= 'https://identitytoolkit.googleapis.com/v1/accounts' 
const APIKey= 'AIzaSyC9SB9V8r8Lx6ZwappQR2SD6uYdym3s35o'
@Injectable({
    providedIn: 'root',
})

export class AuthService{
    constructor(private http: HttpClient, private router: Router){}


    register(user:IUser){
        let registerModel={
            email:user.emailAddress,
        password:user.password,
        returnSecureToken: true,

        };

        this.http.post(BaseUrl + `:signUp?key=${APIKey}`, registerModel).subscribe((response: ICurrentUser)=> {
            const user = {
                idToken: response.idToken,
                email: response.email,
                refreshToken: response.refreshToken,
                expiresIn: response.expiresIn,
            };
            
            this.setLocalStorage(user);
          
            this.router.navigateByUrl('/');


        });
    }

    login(user:IUser){
        let loginModel={
            email:user.emailAddress,
        password:user.password,
        returnSecureToken: true,

        };

        this.http.post(BaseUrl + `:signInWithPassword?key=${APIKey}`, loginModel).subscribe((response: ICurrentUser)=> {
            const user = {
                idToken: response.idToken,
                email: response.email,
                refreshToken: response.refreshToken,
                expiresIn: response.expiresIn,
            };
            
            this.setLocalStorage(user);
          
            this.router.navigateByUrl('/');


        });
    }
    setLocalStorage(user: ICurrentUser){
        localStorage.setItem('user', JSON.stringify(user));
    }
}



        
            

