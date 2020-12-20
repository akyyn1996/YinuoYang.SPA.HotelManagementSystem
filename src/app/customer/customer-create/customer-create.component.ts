import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/core/services/customer.service';
import { RoomService } from 'src/app/core/services/room.service';
import { Room } from 'src/app/shared/models/room';


@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  AvailableRooms:Room[];
  createRoomId:number;
  CreateInformation:CustomerCU = {

    cName: "",
    address: "",
    phone: "",
    email: "",
    totalPersons: null,
    bookingDays: null,
    advance: null,
  }

  constructor(private customerService: CustomerService, private roomService: RoomService) { }

  

  ngOnInit(): void {
    this.roomService.getAllAvailableRooms().subscribe(
      (r) => {
        this.AvailableRooms = r
      }
    )
  }

  setCreateRoomId(id:number){
    console.log("update room id");
    this.createRoomId = id;
  }

  create(){
    this.CreateInformation.roomNo = this.createRoomId;
    for (let i = 0; i < this.AvailableRooms.length; i++) {
      const element = this.AvailableRooms[i];
      if (element.id = this.createRoomId) {
        console.log(element);
        element.status = true;
        this.roomService.UpdateOne(element).subscribe();
        break;
      }

    }
    console.log(this.CreateInformation);
    this.customerService.createNew(this.CreateInformation).subscribe();
  }

}
