import { Component, OnInit } from '@angular/core';
import { toJSDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar';
import { RoomService } from '../core/services/room.service';
import { Room } from '../shared/models/room';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  rooms: Room[];
  availableRooms: Room[] = [];
  roomRequest: Room={};
  createFormVis:boolean = false;
  updateFormVis:boolean = false;
  constructor(private roomService: RoomService) { }

  ngOnInit(): void {
    this.roomService.getAllRooms().subscribe((g)=>{
      this.rooms = g;
      for (let i = 0; i < this.rooms.length; i++) {
        const element = this.rooms[i];
        if (element.status == false) {
          this.availableRooms.push(element);
        }
      }
    })

  }

  Delete(id:number){
    console.log(id);
    this.roomService.deleteOne(id).subscribe();
  }

  create(){
    console.log(this.roomRequest);
    this.roomRequest.status = false;
    this.roomService.createNew(this.roomRequest).subscribe();
  }
  update(){
    console.log(this.roomRequest);
    for (let i = 0; i < this.rooms.length; i++) {
      const element = this.rooms[i];
      if (element.id = this.roomRequest.id) {
        this.roomRequest.status = element.status;
        break;
      }
    }
    this.roomService.UpdateOne(this.roomRequest).subscribe();
  }
}
