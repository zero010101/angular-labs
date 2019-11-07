import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AboutComponent } from './about/about.component';
import { NullableStringPipe } from './shared/nullable-string.pipe';
import { NullablePricePipe } from './shared/nullable-price.pipe';
import { GreetingComponent } from './greeting/greeting.component';
import { BoldDirective } from './shared/bold.directive';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddProductComponent,
    AboutComponent,
    NullableStringPipe,
    NullablePricePipe,
    GreetingComponent,
    BoldDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
