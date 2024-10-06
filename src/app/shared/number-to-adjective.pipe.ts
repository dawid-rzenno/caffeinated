import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberToAdjective',
  standalone: true
})
export class NumberToAdjectivePipe implements PipeTransform {

  transform(value: number): string {
    switch(value) {
      case 1:
        return '1st'

      case 2:
        return '2nd'

      case 3:
        return '3rd'

      default:
        return value + 'th';
    }
  }
}
