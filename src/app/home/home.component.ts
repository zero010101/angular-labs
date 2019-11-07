import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from '../models/product';
import { GreetingComponent } from '../greeting/greeting.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isEdit = false;
  isPressed = false;
  products: Product[];

  @ViewChild(GreetingComponent, { static: false }) greeting: GreetingComponent;


  constructor() {
    this.products = [new Product('твоя жизнь', 1.99,  'унылая фигня'),
      new Product('phone', 150.50, 'you can call'),
      new Product('gun', 300, 'you can shoot yourself (it\'s a joke)'),
      new Product('bad', 250,  'you can sleep')];
   }

  ngOnInit() {
  }

  edit() {
    this.isEdit = !this.isEdit;
  }

  addProduct(product: any) {
    this.products.unshift(new Product(product[0], product[1], product[2]));
  }
}
