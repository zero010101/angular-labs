import { Component, OnInit } from '@angular/core';
import { Type } from 'src/app/model/type.enum';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/core/product.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {
  products: Product[] ;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.products = this.productService.getAll();
  }

}
