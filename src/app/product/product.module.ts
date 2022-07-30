import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrductDetailsComponent } from './prduct-details/prduct-details.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PrductDetailsComponent
  ],
  imports: [
    CommonModule, SharedModule, FormsModule
  ], exports: [
    PrductDetailsComponent
  ]
})
export class ProductModule { }
