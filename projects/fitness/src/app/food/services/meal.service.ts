import { Injectable } from '@angular/core';
import { environment } from "../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Meal, MealDetails } from "../components/meal-details/meal";

@Injectable({
  providedIn: 'root'
})
export class MealService {

  private readonly endpointUrl: string = `${environment.apiUrl}/food/meal`;

  constructor(private http: HttpClient) { }

  create(details: MealDetails): Observable<MealDetails> {
    return this.http.post<MealDetails>(`${this.endpointUrl}`, details)
  }

  get(id: string): Observable<MealDetails> {
    return this.http.get<MealDetails>(`${this.endpointUrl}/${id}`)
  }

  getAll(): Observable<Meal[]> {
    return this.http.get<Meal[]>(`${this.endpointUrl}`)
  }

  update(details: MealDetails): Observable<MealDetails> {
    return this.http.put<MealDetails>(`${this.endpointUrl}/${details.id}`, details)
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.endpointUrl}/${id}`)
  }
}
