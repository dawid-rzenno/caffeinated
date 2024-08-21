import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nutritionPer100g',
  standalone: true
})
export class NutritionPer100gPipe implements PipeTransform {

  transform(value: number, amount: number): number {
    return Math.round(value * (amount / 100) * 100) / 100
  }

}
