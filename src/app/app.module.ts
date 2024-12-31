import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';

import { counterReducer } from './store/counter/counter.reducer';

import { AppComponent } from './app.component';
import { HomeComponent } from './counter/home.component';
import { AsyncPipe } from '@angular/common';
import { ProductsComponent } from './products/products.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ counter: counterReducer }),
    AsyncPipe
  ],
  exports:[AsyncPipe],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
