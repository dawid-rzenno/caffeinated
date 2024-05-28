import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Observable } from "rxjs";
import { Dish } from "./dish";

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  private readonly endpointUrl = `${environment.apiUrl}/food`;

  constructor(private http: HttpClient) { }

  getDish(id: string): Observable<Dish> {
    console.log('Getting dish...')
    return this.http.get<Dish>(`${this.endpointUrl}/dish/${id}`)
  }
}
