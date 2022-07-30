import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../_models/Iproduct';


@Pipe({
  name: 'arraySplice',
  pure: false
})
export class ArraySplicePipe implements PipeTransform {

  transform(value: IProduct[], char: string): IProduct[] {
    let result: IProduct[] = [];
    value.filter(product => {
      if (product.name.includes(char)) {
        result.push(product);
      }
    });
    return result;

  }
}
