import { Injectable } from '@angular/core';
import { environment } from "../../../environments/environment";
import { HttpClient, HttpParams } from "@angular/common/http";
import { map, Observable } from "rxjs";
import { Meal, MealDetails, MealRequest } from "./meal";
import { GetAllRequestParams, TableComponentAbstractService } from "../table-component-abstract.directive";
import { Ingredient } from "../ingredient/ingredient";
import { PaginatedResponse } from "../paginated-response";

@Injectable({
  providedIn: 'root'
})
export class MealService implements TableComponentAbstractService<Meal>{

  private readonly endpointUrl: string = `${environment.apiUrl}/food/meal`;

  constructor(private http: HttpClient) { }

  create(details: MealDetails): Observable<MealDetails> {
    const body: Partial<MealRequest> = {
      name: details.name,
      description: details.description,
      ingredient_ids: details.ingredients.map((ingredient: Ingredient) => ingredient.id!),
      rating: details.rating
    }

    return this.http.post<MealDetails>(`${this.endpointUrl}`, body)
  }

  get(id: string): Observable<MealDetails> {
    return this.http.get<MealDetails>(`${this.endpointUrl}/${id}`)
  }

  getAll(params?: GetAllRequestParams): Observable<PaginatedResponse<Meal>> {
    return this.http.get<PaginatedResponse<Meal>>(`${this.endpointUrl}`, {
      params: new HttpParams({ fromObject: params })
    }).pipe(
      map((paginatedResponse: PaginatedResponse<Meal>) => new PaginatedResponse<Meal>(paginatedResponse))
    )
  }

  update(details: MealDetails): Observable<MealDetails> {
    return this.http.put<MealDetails>(`${this.endpointUrl}/${details.id}`, details)
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.endpointUrl}/${id}`)
  }
}
