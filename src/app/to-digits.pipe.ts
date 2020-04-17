import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toDigits'
})
export class ToDigitsPipe implements PipeTransform {

  transform(value: unknown, arg1: number): unknown {
    return value.toString().padStart(arg1, '0');
  }

}
