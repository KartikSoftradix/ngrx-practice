import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';

import { counterReducer } from './state/counter/counter.reducer';

import { AppComponent } from './app.component';
import { HomeComponent } from './counter/home.component';
import { AsyncPipe } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductCardComponent } from './shared/components/product-card/product-card.component';
import { productReducer } from './state/product/product.reducer';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    // ProductCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ counter: counterReducer, products:productReducer }),
    AsyncPipe,
    ProductCardComponent
  ],
  exports:[AsyncPipe],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
