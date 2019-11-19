import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { Type } from '../model/type.enum';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products = [
    new Product(0, 'Knife0', Type.HouseholdProducts, 300,
     'Some text that discribe this product. Some new line that also describe product', false,
     [
      'https://images.crateandbarrel.com/is/image/Crate/Classic8inChefsKnifeSHF16/?$web_zoom$&190411134925&wid=450&hei=450',
      'https://images.crateandbarrel.com/is/image/Crate/Classic2pcPrepSetSHF16/?$web_zoom$&190411134925&wid=450&hei=450',
      'https://www.williams-sonoma.com/wsimgs/rk/images/dp/wcm/201938/0180/wusthof-classic-chefs-knife-c.jpg'
    ]),
    new Product(1, 'Knife1', Type.HouseholdProducts, 300,
     'Some text that discribe this product. Some new line that also describe product', false,
     [
      'https://images.crateandbarrel.com/is/image/Crate/Classic8inChefsKnifeSHF16/?$web_zoom$&190411134925&wid=450&hei=450',
      'https://images.crateandbarrel.com/is/image/Crate/Classic2pcPrepSetSHF16/?$web_zoom$&190411134925&wid=450&hei=450',
      'https://www.williams-sonoma.com/wsimgs/rk/images/dp/wcm/201938/0180/wusthof-classic-chefs-knife-c.jpg'
    ]),
    new Product(2, 'Knife2', Type.HouseholdProducts, 300,
     'Some text that discribe this product. Some new line that also describe product', false,
     [
      'https://images.crateandbarrel.com/is/image/Crate/Classic8inChefsKnifeSHF16/?$web_zoom$&190411134925&wid=450&hei=450',
      'https://images.crateandbarrel.com/is/image/Crate/Classic2pcPrepSetSHF16/?$web_zoom$&190411134925&wid=450&hei=450',
      'https://www.williams-sonoma.com/wsimgs/rk/images/dp/wcm/201938/0180/wusthof-classic-chefs-knife-c.jpg'
    ]),
    new Product(3, 'Knife3', Type.HouseholdProducts, 300,
     'Some text that discribe this product. Some new line that also describe product', false,
     [
      'https://images.crateandbarrel.com/is/image/Crate/Classic8inChefsKnifeSHF16/?$web_zoom$&190411134925&wid=450&hei=450',
      'https://images.crateandbarrel.com/is/image/Crate/Classic2pcPrepSetSHF16/?$web_zoom$&190411134925&wid=450&hei=450',
      'https://www.williams-sonoma.com/wsimgs/rk/images/dp/wcm/201938/0180/wusthof-classic-chefs-knife-c.jpg'
    ]),
    new Product(4, 'Knife4', Type.HouseholdProducts, 300,
     'Some text that discribe this product. Some new line that also describe product', false,
     [
      'https://images.crateandbarrel.com/is/image/Crate/Classic8inChefsKnifeSHF16/?$web_zoom$&190411134925&wid=450&hei=450',
      'https://images.crateandbarrel.com/is/image/Crate/Classic2pcPrepSetSHF16/?$web_zoom$&190411134925&wid=450&hei=450',
      'https://www.williams-sonoma.com/wsimgs/rk/images/dp/wcm/201938/0180/wusthof-classic-chefs-knife-c.jpg'
    ]),
    new Product(5, 'Knife5', Type.HouseholdProducts, 300,
     'Some text that discribe this product. Some new line that also describe product', false,
     [
      'https://images.crateandbarrel.com/is/image/Crate/Classic8inChefsKnifeSHF16/?$web_zoom$&190411134925&wid=450&hei=450',
      'https://images.crateandbarrel.com/is/image/Crate/Classic2pcPrepSetSHF16/?$web_zoom$&190411134925&wid=450&hei=450',
      'https://www.williams-sonoma.com/wsimgs/rk/images/dp/wcm/201938/0180/wusthof-classic-chefs-knife-c.jpg'
    ]),
    new Product(6, 'Knife6', Type.HouseholdProducts, 300,
     'Some text that discribe this product. Some new line that also describe product', false,
     [
      'https://images.crateandbarrel.com/is/image/Crate/Classic8inChefsKnifeSHF16/?$web_zoom$&190411134925&wid=450&hei=450',
      'https://images.crateandbarrel.com/is/image/Crate/Classic2pcPrepSetSHF16/?$web_zoom$&190411134925&wid=450&hei=450',
      'https://www.williams-sonoma.com/wsimgs/rk/images/dp/wcm/201938/0180/wusthof-classic-chefs-knife-c.jpg'
    ]),
    new Product(7, 'Knife7', Type.HouseholdProducts, 300,
     'Some text that discribe this product. Some new line that also describe product', false,
     [
      'https://images.crateandbarrel.com/is/image/Crate/Classic8inChefsKnifeSHF16/?$web_zoom$&190411134925&wid=450&hei=450',
      'https://images.crateandbarrel.com/is/image/Crate/Classic2pcPrepSetSHF16/?$web_zoom$&190411134925&wid=450&hei=450',
      'https://www.williams-sonoma.com/wsimgs/rk/images/dp/wcm/201938/0180/wusthof-classic-chefs-knife-c.jpg'
    ]),
    new Product(8, 'Knife8', Type.HouseholdProducts, 300,
     'Some text that discribe this product. Some new line that also describe product', false,
     [
      'https://images.crateandbarrel.com/is/image/Crate/Classic8inChefsKnifeSHF16/?$web_zoom$&190411134925&wid=450&hei=450',
      'https://images.crateandbarrel.com/is/image/Crate/Classic2pcPrepSetSHF16/?$web_zoom$&190411134925&wid=450&hei=450',
      'https://www.williams-sonoma.com/wsimgs/rk/images/dp/wcm/201938/0180/wusthof-classic-chefs-knife-c.jpg'
    ]),
    new Product(9, 'Knife9', Type.HouseholdProducts, 300,
     'Some text that discribe this product. Some new line that also describe product', false,
     [
      'https://images.crateandbarrel.com/is/image/Crate/Classic8inChefsKnifeSHF16/?$web_zoom$&190411134925&wid=450&hei=450',
      'https://images.crateandbarrel.com/is/image/Crate/Classic2pcPrepSetSHF16/?$web_zoom$&190411134925&wid=450&hei=450',
      'https://www.williams-sonoma.com/wsimgs/rk/images/dp/wcm/201938/0180/wusthof-classic-chefs-knife-c.jpg'
    ]),
    new Product(10, 'Knife10', Type.HouseholdProducts, 300,
     'Some text that discribe this product. Some new line that also describe product', false,
     [
      'https://images.crateandbarrel.com/is/image/Crate/Classic8inChefsKnifeSHF16/?$web_zoom$&190411134925&wid=450&hei=450',
      'https://images.crateandbarrel.com/is/image/Crate/Classic2pcPrepSetSHF16/?$web_zoom$&190411134925&wid=450&hei=450',
      'https://www.williams-sonoma.com/wsimgs/rk/images/dp/wcm/201938/0180/wusthof-classic-chefs-knife-c.jpg'
    ]),
    new Product(11, 'Knife11', Type.HouseholdProducts, 300,
     'Some text that discribe this product. Some new line that also describe product', false,
     [
      'https://images.crateandbarrel.com/is/image/Crate/Classic8inChefsKnifeSHF16/?$web_zoom$&190411134925&wid=450&hei=450',
      'https://images.crateandbarrel.com/is/image/Crate/Classic2pcPrepSetSHF16/?$web_zoom$&190411134925&wid=450&hei=450',
      'https://www.williams-sonoma.com/wsimgs/rk/images/dp/wcm/201938/0180/wusthof-classic-chefs-knife-c.jpg'
    ])
  ];

  constructor() { }

  getAll() {
    return this.products;
  }

  delete(product: Product) {
    const index = this.products.indexOf(product);
    if (index !== -1) {
      this.products.splice(index, 1);
    }
  }

  add(product: Product) {
    this.products.push(product);
  }

  edit(product: Product) {
    const position = this.products.findIndex(oldProduct => oldProduct.id === product.id);
    this.products[position] = product;
  }
}
