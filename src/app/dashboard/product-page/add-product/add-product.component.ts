import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { ProductService } from 'src/app/core/product.service';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  modalRef: BsModalRef;
  productForm: FormGroup;
  types = [ 'Appliances', 'Children\'s products', 'Stationery', 'Plumbing and repair', 'Household products'];

  constructor(private modalService: BsModalService, private formBuilder: FormBuilder, private productService: ProductService) { }

  ngOnInit() {
    this.loadForm();
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { ignoreBackdropClick: true });
  }

  addPhotoLink() {
    (this.productForm.get('photoLinks') as FormArray).push(this.formBuilder.control(''));
  }

  deletePhotoLink(index: number) {
    (this.productForm.get('photoLinks') as FormArray).removeAt(index);
  }

  onSubmit() {
    if (this.productForm.invalid) {
      return;
    }

    const product = this.productForm.value as Product;
    this.productService.add(product);
    this.onCansel();
  }

  onCansel() {
    this.productForm.reset();
    this.modalRef.hide();
  }

  private loadForm() {
    this.productForm = this.formBuilder.group({
      name: [ '', Validators.required ],
      type: ['', Validators.required ],
      price: [ '', Validators.required ],
      description: ['', Validators.required],
      isSecondHand: [''],
      photoLinks: this.formBuilder.array([
        this.formBuilder.control('')
      ])
    });
  }
}
