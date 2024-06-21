import { Injectable } from '@angular/core';
import { environment } from "../../../environments/environment";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { ShoppingList, ShoppingListDetails, ShoppingListRequest } from "./shopping-list";
import { GetAllRequestParams } from "../table-component-abstract.directive";
import { Ingredient } from "../ingredient/ingredient";
import { PaginatedResponse } from "../pagination";

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  private readonly endpointUrl: string = `${environment.apiUrl}/food/shopping-list`;

  constructor(private http: HttpClient) { }

  create(details: ShoppingListDetails): Observable<ShoppingListDetails> {
    const body: Partial<ShoppingListRequest> = {
      name: details.name,
      description: details.description,
      ingredient_ids: details.ingredients.map((ingredient: Ingredient) => ingredient.id!),
    }

    return this.http.post<ShoppingListDetails>(`${this.endpointUrl}`, body)
  }

  get(id: string): Observable<ShoppingListDetails> {
    return this.http.get<ShoppingListDetails>(`${this.endpointUrl}/${id}`)
  }

  getAll(params?: GetAllRequestParams): Observable<PaginatedResponse<ShoppingList>> {
    return this.http.get<PaginatedResponse<ShoppingList>>(`${this.endpointUrl}`, {
      params: new HttpParams({ fromObject: params })
    })
  }

  update(details: ShoppingListDetails): Observable<ShoppingListDetails> {
    return this.http.put<ShoppingListDetails>(`${this.endpointUrl}/${details.id}`, details)
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.endpointUrl}/${id}`)
  }
}
