import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { Product } from 'src/app/model/product';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal/';
import { ProductService } from 'src/app/core/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  providers: [{ provide: BsDropdownConfig, useValue: { isAnimated: true, autoClose: true } },
    { provide: CarouselConfig, useValue: { interval: 1500, noPause: true, showIndicators: false } }]
})
export class ProductComponent implements OnInit {
  modalRef: BsModalRef;
  @Input() product: Product;

  constructor(private modalService: BsModalService, private productService: ProductService) { }

  ngOnInit() {
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
