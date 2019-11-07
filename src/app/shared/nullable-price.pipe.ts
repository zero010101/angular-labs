import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nullablePrice'
})
export class NullablePricePipe implements PipeTransform {

  transform(value: number): number {
    if (!value) {
      return 0;
    }
    return value;
  }

}
