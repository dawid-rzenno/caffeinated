import { Injectable } from '@angular/core';
import { environment } from "../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ShoppingList, ShoppingListDetails } from "../components/shopping-list-details/shopping-list";

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

  getAll(): Observable<ShoppingList[]> {
    return this.http.get<ShoppingList[]>(`${this.endpointUrl}`)
  }

  update(details: ShoppingListDetails): Observable<ShoppingListDetails> {
    return this.http.put<ShoppingListDetails>(`${this.endpointUrl}/${details.id}`, details)
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.endpointUrl}/${id}`)
  }
}
