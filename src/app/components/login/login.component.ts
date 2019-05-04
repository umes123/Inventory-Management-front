import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  result:any;
  errorr:any;
  constructor(private _http:HttpClient,private router:Router) { }

  ngOnInit() {
  }
  submit(val){
    this._http.post('https://mindfire-sample-rest.herokuapp.com/api/Accounts/login',val).subscribe(res =>{this.result=res;
    localStorage.setItem('token',this.result.id);
    localStorage.setItem('userId',this.result.userId);
    this.router.navigate(['/crud'])},(err:HttpErrorResponse)=>{
      this.errorr=err.error;
    })
  }
  
}
