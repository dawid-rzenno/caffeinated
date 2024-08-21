import { Injectable } from '@angular/core';
import { map, Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Ingredient, IngredientDetails } from "./ingredient";
import { GetAllRequestParams, TableComponentAbstractService } from "../table-component-abstract.directive";
import { PaginatedResponse } from "../paginated-response";

@Injectable({
  providedIn: 'root'
})
export class IngredientService implements TableComponentAbstractService<Ingredient> {

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

  getAll(params?: GetAllRequestParams): Observable<PaginatedResponse<Ingredient>> {
    return this.http.get<PaginatedResponse<Ingredient>>(`${this.endpointUrl}`, {
      params: new HttpParams({ fromObject: params })
    }).pipe(
      map((paginatedResponse: PaginatedResponse<Ingredient>) => new PaginatedResponse<Ingredient>(paginatedResponse))
    )
  }

  update(details: IngredientDetails): Observable<IngredientDetails> {
    return this.http.put<IngredientDetails>(`${this.endpointUrl}/${details.id}`, details)
  }

  delete(id: number | undefined): Observable<void> {
    return this.http.delete<void>(`${this.endpointUrl}/${id}`)
  }
}
