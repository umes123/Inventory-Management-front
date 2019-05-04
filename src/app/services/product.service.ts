import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Product} from '../modal/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  formData  : Product;
  list : Product[];
  
  readonly rootURL ="http://localhost:8090"

  constructor(private http : HttpClient) { }

  postProduct(formData : Product){
   return this.http.post(this.rootURL+'/insert',formData);
    
  }

  refreshList(){
    this.http.get(this.rootURL+'/fetch')
    .toPromise().then(res => this.list = res as Product[]);
  }

  getProductCount(){
    return this.list.length;
    
  }

  putProduct(formData : Product){
    return this.http.post(this.rootURL+'/update',formData); 
   }

   deleteProduct(data){
    return this.http.post(this.rootURL+'/delete',data);
   }
}
