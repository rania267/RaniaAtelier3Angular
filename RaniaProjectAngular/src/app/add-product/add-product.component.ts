import { Component, OnInit } from '@angular/core';
import { article } from '../model/article';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
produit!:article;
  constructor() { }

  ngOnInit(): void {
    this.produit= new article();
  }
  

}
