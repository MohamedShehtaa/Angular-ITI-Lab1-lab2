import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'powerTox'
})
export class PowerToxPipe implements PipeTransform {

  transform(value: number, power: number): number {
    return Math.pow(value, power);
  }

}
