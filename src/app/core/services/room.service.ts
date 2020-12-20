import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Room } from 'src/app/shared/models/room';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private apiService:ApiService) {

  }
  getAllRooms(): Observable<Room[]>{
    return this.apiService.getAll("room"); 
  }

  deleteOne(id:number):Observable<boolean>{
    console.log(id);
    return this.apiService.Delete('room',id).pipe(
      map((response) => {
        if (response) {
          console.log(response);
          return true;
        }
        return false;
      }));
     }
     createNew(model: Room):Observable<boolean>{
      return this.apiService.create('room', model).pipe(
        map((response) => {
          if (response) {
            console.log(response);
            return true;
          }
    
          return false;
        }));
    }
    UpdateOne(model: Room):Observable<boolean>{
      return this.apiService.update('room', model).pipe(
        map((response) => {
          if (response) {
            console.log(response);
            return true;
          }
    
          return false;
        }));
    }
}
