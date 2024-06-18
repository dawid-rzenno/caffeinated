import { Injectable } from '@angular/core';
import { environment } from "../../../environments/environment";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { ShoppingList, ShoppingListDetails } from "./shopping-list";
import { GetAllRequestData } from "../table-component-abstract.directive";

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  private readonly endpointUrl: string = `${environment.apiUrl}/food/shopping-list`;

  constructor(private http: HttpClient) { }

  create(details: ShoppingListDetails): Observable<ShoppingListDetails> {
    return this.http.post<ShoppingListDetails>(`${this.endpointUrl}`, details)
  }

  get(id: string): Observable<ShoppingListDetails> {
    return this.http.get<ShoppingListDetails>(`${this.endpointUrl}/${id}`)
  }

  getAll(data?: GetAllRequestData): Observable<ShoppingList[]> {
    const params: HttpParams = new HttpParams({ fromObject: data });

    return this.http.get<ShoppingList[]>(`${this.endpointUrl}`, { params })
  }

  update(details: ShoppingListDetails): Observable<ShoppingListDetails> {
    return this.http.put<ShoppingListDetails>(`${this.endpointUrl}/${details.id}`, details)
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.endpointUrl}/${id}`)
  }
}
