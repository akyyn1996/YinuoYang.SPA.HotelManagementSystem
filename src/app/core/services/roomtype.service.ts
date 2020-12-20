import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RoomType } from 'src/app/shared/models/roomType';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class RoomtypeService {



  constructor(private apiService:ApiService) {

  }

 getAllRoomTypes(): Observable<RoomType[]>{
   return this.apiService.getAll("roomtype");
   
 }



 deleteOne(id:number):Observable<boolean>{
  console.log(id);
  return this.apiService.Delete('roomtype',id).pipe(
    map((response) => {
      if (response) {
        console.log(response);
        return true;
      }

      return false;
    })
  );


  }

  createNew(model: RoomType):Observable<boolean>{
    //return this.apiService.create('customer',model);
    return this.apiService.create('roomtype', model).pipe(
      map((response) => {
        if (response) {
          console.log(response);
          return true;
        }
  
        return false;
      })
    );
}

}
