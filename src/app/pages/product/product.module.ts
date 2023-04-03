import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from '../product/product.component';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    ProductComponent,

  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    TableModule,
    HttpClientModule,
    FormsModule
  ]
})
export class ProductModule { }
