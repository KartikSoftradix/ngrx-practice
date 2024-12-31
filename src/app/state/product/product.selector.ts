import { createSelector } from "@ngrx/store";
import { AppState } from '../app.state';

export const ProductSelectorState = (state:AppState) => state.products;

export const ProductSelector = createSelector(
    ProductSelectorState,
    state => state.products
);