import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { ItemsComponentAbstractService } from "../abstracts/items-component.abstract";
import { environment } from "../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Ingredient, IngredientDetails } from "../components/ingredient-details/ingredient";

@Injectable({
  providedIn: 'root'
})
export class IngredientService implements ItemsComponentAbstractService<Ingredient> {

  private readonly endpointUrl: string = `${environment.apiUrl}/food/ingredient`;

  constructor(private http: HttpClient) { }

  create(details: IngredientDetails): Observable<IngredientDetails> {
    return this.http.post<IngredientDetails>(`${this.endpointUrl}`, details)
  }

  get(id: string): Observable<IngredientDetails> {
    return this.http.get<IngredientDetails>(`${this.endpointUrl}/${id}`)
  }

  getAll(): Observable<Ingredient[]> {
    return this.http.get<Ingredient[]>(`${this.endpointUrl}`)
  }

  update(details: IngredientDetails): Observable<IngredientDetails> {
    return this.http.put<IngredientDetails>(`${this.endpointUrl}/${details.id}`, details)
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.endpointUrl}/${id}`)
  }
}
