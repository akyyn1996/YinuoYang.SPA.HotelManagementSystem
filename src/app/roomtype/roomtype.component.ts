import { Component, OnInit } from '@angular/core';
import { RoomtypeService } from '../core/services/roomtype.service';
import { RoomType } from '../shared/models/roomType';

@Component({
  selector: 'app-roomtype',
  templateUrl: './roomtype.component.html',
  styleUrls: ['./roomtype.component.css']
})
export class RoomtypeComponent implements OnInit {
  roomtypes: RoomType[];

  constructor(private roomTypeService: RoomtypeService) { }

  ngOnInit(): void {
    this.roomTypeService.getAllRoomTypes().subscribe((g) => {
      
      this.roomtypes = g;
    })
  }


}
