import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  
  constructor(private service:ProductService) { }

  ngOnInit() {
    this.resetForm(); 
  }

  resetForm(){
    this.service.formData={
      name: '',
      price:'',
      rating: '',
      _id: ''
    }
  }

  add(form){
    console.log(form.value);
    this.service.postProduct(form.value).subscribe(res =>{
      this.resetForm();
      this.service.refreshList();
    })
    this.resetForm()
  }

  update(form){
    this.service.putProduct(form.value).subscribe(res =>{
      this.resetForm();
      this.service.refreshList();
    })
  }

  delete(form){
    this.service.deleteProduct(form.value).subscribe(res =>{
      this.resetForm();
      this.service.refreshList();
    })
    //console.log(form.value)
  }

  reset(){
    this.resetForm()
  }

}
