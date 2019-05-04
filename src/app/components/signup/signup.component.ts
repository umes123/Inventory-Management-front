import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpErrorResponse} from '@angular/common/http';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  result:any;
  errorr:any;
  constructor(private _http:HttpClient) { }

  ngOnInit() {
  }
  submit(val){
    this._http.post('https://mindfire-sample-rest.herokuapp.com/api/Accounts',val).subscribe(res =>{this.result=res},
    (err:HttpErrorResponse)=>{
      this.errorr=err.error;
    })
    //console.log(val)
    
  }
  
}
