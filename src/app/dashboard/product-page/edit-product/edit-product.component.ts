import { Component, OnInit, TemplateRef, Input, AfterViewInit, OnChanges, AfterViewChecked } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/core/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit, OnChanges {
  @Input() product: Product;
  modalRef: BsModalRef;
  productForm: FormGroup;
  type = [ 'Appliances', 'Children\'s products', 'Stationery', 'Plumbing and repair', 'Household products'];

  constructor(private modalService: BsModalService, private formBuilder: FormBuilder, private productService: ProductService) { }

  ngOnInit() {
    this.productForm = this.formBuilder.group({
      name: [ '', Validators.required ],
      type: [ '', Validators.required ],
      price: [ '', Validators.required ],
      description: [ '', Validators.required],
      isSecondHand: [ '' ],
      photoLinks: this.formBuilder.array([])
    });
  }

  ngOnChanges() {
    this.loadForm();
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
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
    //this.productService.edit(product);
    this.onCansel();
  }

  onCansel() {
    this.productForm.reset();
    this.modalRef.hide();
  }

  private loadForm() {
    this.productForm.setValue({
      name: this.product.name,
      type: this.product.type,
      price: this.product.price,
      description: this.product.description,
      isSecondHand: this.product.isSecondHand
    });

    for (const photoLink of this.product.photoLinks) {
      (this.productForm.get('photoLinks') as FormArray).push(this.formBuilder.control(photoLink));
    }
  }
}
