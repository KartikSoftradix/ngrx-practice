import { IProduct } from './../interfaces/products';
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { 
    
  }

  changeProducts(){
    return this.http.get<IProduct[]>('https://fakestoreapi.com/products')
     .pipe(map(products => products.map(product => ( {...product, quantity:1} ) )));
  }
  
}
