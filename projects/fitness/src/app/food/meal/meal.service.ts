import { Injectable } from '@angular/core';
import { environment } from "../../../environments/environment";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { Meal, MealDetails } from "./meal";
import { GetAllRequestData } from "../table-component-abstract.directive";

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

  getAll(data?: GetAllRequestData): Observable<Meal[]> {
    const params: HttpParams = new HttpParams({ fromObject: data });

    return this.http.get<Meal[]>(`${this.endpointUrl}`, { params })
  }

  update(details: MealDetails): Observable<MealDetails> {
    return this.http.put<MealDetails>(`${this.endpointUrl}/${details.id}`, details)
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.endpointUrl}/${id}`)
  }
}
