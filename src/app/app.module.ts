import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { DepartmentModule } from './department/department.module';
import { StudentModule } from './student/student.module';

import { ProductModule } from './product/product.module';
import { SharedModule } from './shared/shared.module';



@NgModule({
  declarations: [
    AppComponent,



  ],
  imports: [
    BrowserModule, DepartmentModule, StudentModule, CoreModule, ProductModule, SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
