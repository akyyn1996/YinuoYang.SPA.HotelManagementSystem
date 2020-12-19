import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
}
