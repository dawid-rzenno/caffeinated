import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Observable } from "rxjs";
import { Meal, MealDetails } from "./meal-details/meal";
import { Diet, DietDetails } from "./diet-details/diet";
import { ShoppingList, ShoppingListDetails } from "./shopping-list-details/shopping-list";

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  private readonly endpointUrl: string = `${environment.apiUrl}/food`;

  constructor(private http: HttpClient) {}

  getMeal(id: string): Observable<MealDetails> {
    return this.http.get<MealDetails>(`${this.endpointUrl}/meal/${id}`)
  }

  getMeals(): Observable<Meal[]> {
    return this.http.get<Meal[]>(`${this.endpointUrl}/meal`)
  }

  createMeal(details: MealDetails): Observable<MealDetails> {
    return this.http.post<MealDetails>(`${this.endpointUrl}/meal`, details)
  }

  getDiet(id: string): Observable<DietDetails> {
    return this.http.get<DietDetails>(`${this.endpointUrl}/diet/${id}`)
  }

  getDiets(): Observable<Diet[]> {
    return this.http.get<Diet[]>(`${this.endpointUrl}/diet`)
  }

  createDiets(details: DietDetails): Observable<DietDetails> {
    return this.http.post<DietDetails>(`${this.endpointUrl}/diet`, details)
  }

  getShoppingList(id: string): Observable<ShoppingListDetails> {
    return this.http.get<ShoppingListDetails>(`${this.endpointUrl}/shopping-list/${id}`)
  }

  getShoppingLists(): Observable<ShoppingList[]> {
    return this.http.get<ShoppingList[]>(`${this.endpointUrl}/shopping-list`)
  }

  createShoppingList(details: ShoppingListDetails): Observable<ShoppingListDetails> {
    return this.http.post<ShoppingListDetails>(`${this.endpointUrl}/shopping-list`, details)
  }
}
