import { AuthService } from './../auth/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {

  constructor(private authservice:AuthService,private router:Router) { }

  canActivate(){
    if(this.authservice.isloggedin()){
      return true
    }else{
      this.router.navigate(['/login']);
      return false
    }
  }

}
