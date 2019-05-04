import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  result:any;
  constructor(private service:AuthService,private _http:HttpClient,private ser:ProductService) { }

  ngOnInit() {
     //this._http.get('http://localhost:8080/crudemp').subscribe(res =>{this.result=res})
     
  }
  //name =this.service.currentuser.name;

  onSubmit(form){
    console.log(form.value)
  }
  
}
