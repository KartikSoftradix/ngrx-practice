import { IProduct } from './../shared/interfaces/products';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from '../shared/services/api.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
   products$!: Observable<IProduct[]>;
   products1$!:IProduct[];
   constructor(private http:HttpClient,private apiService: ApiService) {
    
   }

   ngOnInit(){
    // this.products$ = this.http.get('https://fakestoreapi.com/products');
    this.products$ = this.apiService.changeProducts();
   }
}
                                                                                                                                                                                                                                                                                                                                                           