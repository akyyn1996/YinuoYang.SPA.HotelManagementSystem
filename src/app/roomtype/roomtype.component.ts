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
  roomtypeRequest: RoomType={};
  createFormVis:boolean = false;
  updateFormVis:boolean = false;
  constructor(private roomTypeService: RoomtypeService) { }

  ngOnInit(): void {
    this.roomTypeService.getAllRoomTypes().subscribe((g) => {
      this.roomtypes = g;
    })
  }

  Delete(id:number){
    console.log(id);
    this.roomTypeService.deleteOne(id).subscribe();
  }

  create(){
    console.log(this.roomtypeRequest);
    this.roomTypeService.createNew(this.roomtypeRequest).subscribe();
  }
  update(){
    console.log(this.roomtypeRequest);
    this.roomTypeService.UpdateOne(this.roomtypeRequest).subscribe();
  }

}
