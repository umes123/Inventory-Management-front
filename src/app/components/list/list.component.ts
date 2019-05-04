import { Product } from './../../modal/product.model';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private service:ProductService) { }

  ngOnInit() {
     this.service.refreshList();
  }

  populateForm(product){
    this.service.formData=Object.assign({},product);
  }

}
