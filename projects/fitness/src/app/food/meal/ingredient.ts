

export type Ingredient = {
  id: string;
  name: string;
  category: string;
  price: number;
  count?: number;
  amount: number;
}

export type Nutrients = {
  calories: number;
  proteins: number;
  carbohydrates: number;
  fats: number;
}

export type IngredientDetails = Ingredient & Nutrients;
