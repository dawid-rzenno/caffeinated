export interface Ingredient extends Nutrition {
  id: string;
  name: string;
  category: string;
}

export interface Nutrition {
  calories: number;
  proteins: number;
  carbohydrates: number;
  fats: number;
}
