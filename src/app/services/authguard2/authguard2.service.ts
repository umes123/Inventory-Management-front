import { AuthService } from './../auth/auth.service';
import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class Authguard2Service implements CanActivate {

  constructor(private service2:AuthService,private router:Router) { }

  canActivate(){
    if(this.service2.isloggedin()){
      this.router.navigate(['/crud']);
      return false;
    }else{
      return true;
    }
  }
}
