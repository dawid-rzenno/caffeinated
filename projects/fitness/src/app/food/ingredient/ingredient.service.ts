import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Ingredient, IngredientDetails } from "./ingredient";
import { GetAllRequestData } from "../table-component-abstract.directive";

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  private readonly endpointUrl: string = `${environment.apiUrl}/food/ingredient`;

  constructor(private http: HttpClient) { }

  create(details: IngredientDetails): Observable<IngredientDetails> {
    const body: Partial<IngredientDetails> = {
      name: details.name,
      category_id: details.category_id,
      price: details.price,
      calories: details.calories,
      proteins: details.proteins,
      carbohydrates: details.carbohydrates,
      fats: details.fats,
    }

    return this.http.post<IngredientDetails>(`${this.endpointUrl}`, body)
  }

  get(id: string): Observable<IngredientDetails> {
    return this.http.get<IngredientDetails>(`${this.endpointUrl}/${id}`)
  }

  getAll(data?: GetAllRequestData): Observable<Ingredient[]> {
    const params: HttpParams = new HttpParams({ fromObject: data });

    return this.http.get<Ingredient[]>(`${this.endpointUrl}`, { params })
  }

  update(details: IngredientDetails): Observable<IngredientDetails> {
    return this.http.put<IngredientDetails>(`${this.endpointUrl}/${details.id}`, details)
  }

  delete(id: number | undefined): Observable<void> {
    return this.http.delete<void>(`${this.endpointUrl}/${id}`)
  }
}
