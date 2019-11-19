import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './dashboard/product-page/product/product.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { DeleteProductComponent } from './dashboard/product-page/delete-product/delete-product.component';
import { EditProductComponent } from './dashboard/product-page/edit-product/edit-product.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { AddProductComponent } from './dashboard/product-page/add-product/add-product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductPageComponent } from './dashboard/product-page/product-page.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProductComponent,
    DeleteProductComponent,
    EditProductComponent,
    AddProductComponent,
    ProductPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    CarouselModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
