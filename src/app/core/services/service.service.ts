import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Service } from 'src/app/shared/models/service';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private apiService:ApiService) {

  }
  getAllServices(): Observable<Service[]>{
    return this.apiService.getAll("service");
    
  }
   deleteOne(id:number):Observable<boolean>{
  console.log(id);
  return this.apiService.Delete('service',id).pipe(
    map((response) => {
      if (response) {
        console.log(response);
        return true;
      }
      return false;
    }));
   }
   createNew(model: Service):Observable<boolean>{
    return this.apiService.create('service', model).pipe(
      map((response) => {
        if (response) {
          console.log(response);
          return true;
        }
  
        return false;
      }));
  }
  
  UpdateOne(model: Service):Observable<boolean>{
    return this.apiService.update('service', model).pipe(
      map((response) => {
        if (response) {
          console.log(response);
          return true;
        }
  
        return false;
      }));
  }
}
