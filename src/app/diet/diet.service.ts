import { Injectable } from '@angular/core';
import { GetAllRequestParams, TableComponentAbstractService } from "../shared/table-component-abstract.directive";
import { Diet, DietDetails, DietRequest } from "./diet";
import { map, Observable } from "rxjs";
import { environment } from "../../environments/environment";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Meal } from "../meal/meal";
import { PaginatedResponse } from "../shared/models/paginated-response";

@Injectable({
  providedIn: 'root'
})
export class DietService implements TableComponentAbstractService<Diet> {

  private readonly endpointUrl: string = `${environment.apiUrl}/food/diet`;

  constructor(private http: HttpClient) { }

  create(details: DietDetails): Observable<DietDetails> {
    const body: Partial<DietRequest> = {
      name: details.name,
      description: details.description,
      meal_ids: details.meals.map((meal: Meal) => meal.id!),
    }

    return this.http.post<DietDetails>(`${this.endpointUrl}`, body)
  }

  get(id: string): Observable<DietDetails> {
    return this.http.get<DietDetails>(`${this.endpointUrl}/${id}`)
  }

  getAll(params?: GetAllRequestParams): Observable<PaginatedResponse<Diet>> {
    return this.http.get<PaginatedResponse<Diet>>(`${this.endpointUrl}`, {
      params: new HttpParams({ fromObject: params })
    }).pipe(
      map((paginatedResponse: PaginatedResponse<Diet>) => new PaginatedResponse<Diet>(paginatedResponse))
    )
  }

  update(details: DietDetails): Observable<DietDetails> {
    return this.http.put<DietDetails>(`${this.endpointUrl}/${details.id}`, details)
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.endpointUrl}/${id}`)
  }
}
