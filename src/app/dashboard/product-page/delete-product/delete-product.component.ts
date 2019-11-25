import { Component, OnInit, TemplateRef, Input } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ProductService } from 'src/app/core/product.service';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.scss']
})
export class DeleteProductComponent implements OnInit {
  @Input() product: Product;
  modalRef: BsModalRef;

  constructor(private modalService: BsModalService, private productService: ProductService) { }

  ngOnInit() {
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { ignoreBackdropClick: true, class: 'modal-sm' });
  }

  confirm(): void {
    //this.productService.delete(this.product);
    this.modalRef.hide();
  }

  decline(): void {
    this.modalRef.hide();
  }

}
