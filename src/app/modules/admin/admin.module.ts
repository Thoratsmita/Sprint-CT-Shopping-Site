import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialModule } from 'src/app/material/material.module';
import { CartComponent } from './cart/cart.component';
import { ProductsComponent } from './products/products.component';


@NgModule({
  declarations: [
    DashboardComponent,
    CartComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule
  ]
})
export class AdminModule { }
