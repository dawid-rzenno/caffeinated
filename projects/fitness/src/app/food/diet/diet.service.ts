import { Injectable } from '@angular/core';
import { GetAllRequestData, TableComponentAbstractService } from "../table-component-abstract.directive";
import { Diet, DietDetails } from "./diet";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import { HttpClient, HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DietService implements TableComponentAbstractService<Diet>{

  private readonly endpointUrl: string = `${environment.apiUrl}/food/diet`;

  constructor(private http: HttpClient) { }

  create(details: DietDetails): Observable<DietDetails> {
    return this.http.post<DietDetails>(`${this.endpointUrl}`, details)
  }

  get(id: string): Observable<DietDetails> {
    return this.http.get<DietDetails>(`${this.endpointUrl}/${id}`)
  }

  getAll(data?: GetAllRequestData): Observable<Diet[]> {
    const params: HttpParams = new HttpParams({ fromObject: data });

    return this.http.get<Diet[]>(`${this.endpointUrl}`, { params })
  }

  update(details: DietDetails): Observable<DietDetails> {
    return this.http.put<DietDetails>(`${this.endpointUrl}/${details.id}`, details)
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.endpointUrl}/${id}`)
  }
}
