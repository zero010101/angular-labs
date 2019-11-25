import { Injectable, ɵɵstylePropInterpolateV } from '@angular/core';
import { Product } from '../model/product';
import { Type } from '../model/type.enum';
import { Observable } from 'rxjs';
import { map, filter, tap } from 'rxjs/operators';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl = 'http://localhost:8080/products';

  constructor(private http: HttpClient) { }

  getAllWithPriceAndType(price: number, type: string): Observable<Product[]> {
    return this.http.get(this.baseUrl, { params: new HttpParams().set('price', price.toString()).set('type', type)})
    .pipe(map((products: any[]) => products.map((product: any) =>
    new Product(product.id, product.name, product.type, product.price, product.description, product.isSecondHand, product.photoLinks))),
    filter((products: Product[]) => !!products));
  }

  getAll(): Observable<Product[]> {
    return this.http.get(this.baseUrl,  { headers: new HttpHeaders().set('Access-Control-Allow-Origin: ', '*') } )
    .pipe(map((products: any[]) => products.map((product: any) =>
    new Product(product.id, product.name, product.type, product.price, product.description, product.isSecondHand, product.photoLinks))),
    filter((products: Product[]) => !!products));
  }

}
