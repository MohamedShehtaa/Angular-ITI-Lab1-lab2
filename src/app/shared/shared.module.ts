import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PowerToxPipe } from '../pipes/power-tox.pipe';
import { StringConvertPipe } from '../pipes/string-convert.pipe';
import { ArraySplicePipe } from '../pipes/array-splice.pipe';



@NgModule({
  declarations: [
    PowerToxPipe, StringConvertPipe, ArraySplicePipe
  ],
  imports: [
    CommonModule
  ]
  ,
  exports: [PowerToxPipe, StringConvertPipe, ArraySplicePipe]
})
export class SharedModule { }
