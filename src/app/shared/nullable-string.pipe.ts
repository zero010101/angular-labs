import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nullableString'
})
export class NullableStringPipe implements PipeTransform {

  transform(value: string): string {
    if (!value || value === '') {
      return 'unknown';
    }
    return value;
  }
}
