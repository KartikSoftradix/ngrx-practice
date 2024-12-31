import { createReducer, on } from "@ngrx/store";
import { IProduct } from "../../shared/interfaces/products";
import * as ProductsActions from "./product.action";

export interface ProductState{
    products:IProduct[]
}

export const initialProductState:ProductState = {
    products:[]
}

export const productReducer = createReducer(
    initialProductState,
    on(ProductsActions.addProduct, (state, {product})=> ({...state,products:[...state.products,product]}))
)