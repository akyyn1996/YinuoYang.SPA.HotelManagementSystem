import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams }  from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, pipe } from 'rxjs';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(protected http: HttpClient) {}
  getAll(path: string): Observable<any[]> {
    let getUrl: string;

    getUrl = `${environment.apiUrl}${path}`;
    
    return this.http
    .get(getUrl)
    .pipe(map((resp) => resp as any[]));

   }

   getOne(path: string, id?: number): Observable<any> {
    let getUrl: string;
    if (id) {
      getUrl = `${environment.apiUrl}${path}` + '/' + id;
    } else {
      getUrl = `${environment.apiUrl}${path}`;
    }
    return this.http.get(getUrl).pipe(map((resp) => resp as any));
  }


}
