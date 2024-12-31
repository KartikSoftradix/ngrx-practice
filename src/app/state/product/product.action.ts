import { IProduct } from '../../shared/interfaces/products';
import { createAction, props } from "@ngrx/store";

export const addProduct = createAction('[Product Component] AddProduct',props<{product:IProduct}>());