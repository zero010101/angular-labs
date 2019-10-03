import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isEdit = false;
  isPressed = false;
  products: Product[];

  constructor() {
    this.products = [new Product('phone', 'you can call'),
     new Product('gun', 'you can shoot yourself (it\'s a joke)'),
     new Product('bad', 'you can sleep')];
   }

  ngOnInit() {
  }

  edit() {
    this.isEdit = !this.isEdit;
  }

  addProduct(product: any) {
    this.products.unshift(new Product(product[0], product[1]));
  }
}
