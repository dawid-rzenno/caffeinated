import { DBItem } from "../items-component.abstract";

export type Ingredient = DBItem & {
  name: string;
  category: string;
  price: number;
  quantity?: number;
  amount: number;
}

export type Nutrients = {
  calories: number;
  proteins: number;
  carbohydrates: number;
  fats: number;
}

export type IngredientDetails = Ingredient & Nutrients;
