import { Component, OnInit, Input, Output, EventEmitter, TemplateRef } from '@angular/core';
import { Product } from '../models/product';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  @Input() products: Product[] = [];
  @Output() onadd: EventEmitter<any> = new EventEmitter<any>();

  isChanged = false;

  constructor() { }

  ngOnInit() {
  }

  onChange(productValue: any) {
    this.onadd.emit(productValue);
  }
}
