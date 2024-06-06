import { Injectable } from '@angular/core';
import { ItemsComponentAbstractService } from "../abstracts/items-component.abstract";
import { Diet, DietDetails } from "../components/diet-details/diet";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DietService implements ItemsComponentAbstractService<Diet>{

  private readonly endpointUrl: string = `${environment.apiUrl}/food/diet`;

  constructor(private http: HttpClient) { }

  create(details: DietDetails): Observable<DietDetails> {
    return this.http.post<DietDetails>(`${this.endpointUrl}`, details)
  }

  get(id: string): Observable<DietDetails> {
    return this.http.get<DietDetails>(`${this.endpointUrl}/${id}`)
  }

  getAll(): Observable<Diet[]> {
    return this.http.get<Diet[]>(`${this.endpointUrl}`)
  }

  update(details: DietDetails): Observable<DietDetails> {
    return this.http.put<DietDetails>(`${this.endpointUrl}/${details.id}`, details)
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.endpointUrl}/${id}`)
  }
}
