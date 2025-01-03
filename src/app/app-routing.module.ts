import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './counter/home.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {
    path:'', redirectTo:'products',pathMatch:'full'
  },
  {
    path:'products',
    component:ProductsComponent
    // loadComponent: () => import('./products/products.component').then(m => m.ProductsComponent)
  },
  {
    path:'counter', component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
