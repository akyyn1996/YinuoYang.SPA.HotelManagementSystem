import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams }  from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, pipe } from 'rxjs';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private headers: HttpHeaders;

  constructor(protected http: HttpClient) {
    this.headers = new HttpHeaders();
    this.headers.append('Content-type', 'application/json');
  }
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

  create(path: string, resource: any, options?: any): Observable<any> {
    let url = `${environment.apiUrl}${path}`;
    console.log(url);
    return this.http
      .post(url, resource, { headers: this.headers })
      .pipe(map((response, error) => {
        if(response){
          console.log(response)
          return response;
        } 
        else{
          console.log(error)
          return error;
        }
      }));
  
  
    }
  
    update(path: string, resource: any, options?: any): Observable<any> {
      let url = `${environment.apiUrl}${path}`;
      console.log(url);
      return this.http
        .put(url, resource, { headers: this.headers })
        .pipe(map((response, error) => {
          if(response){
            console.log(response)
            return response;
          } 
          else{
            console.log(error)
            return error;
          }
        }));
    
    
      }

    Delete(path: string, id: number): Observable<any> {
      let Url: string;
      
      Url = `${environment.apiUrl}${path}` + '/' + id;

      return this.http.delete(Url).pipe(map((resp) => resp as any));
    }

}
