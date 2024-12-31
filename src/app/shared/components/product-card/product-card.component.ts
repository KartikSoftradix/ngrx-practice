import { Component, Input } from '@angular/core';
import { IProduct } from '../../interfaces/products';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
  standalone:true,
  imports:[]
})
export class ProductCardComponent {
  @Input() product!: IProduct;
}
