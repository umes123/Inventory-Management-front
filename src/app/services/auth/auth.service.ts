import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import {tokenNotExpired,JwtHelper} from 'angular2-jwt';
import {Observable} from 'rxjs/Observable';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user:any;
  constructor(private router:Router) { }
  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    this.router.navigate(['/']);
  }
  isloggedin(){
    //return tokenNotExpired();
    if(localStorage.getItem('token') == null){
      return false;
    }else{
      return true;
    }
  }
  get currentuser(){
    return localStorage.getItem('userId');
  }
}
