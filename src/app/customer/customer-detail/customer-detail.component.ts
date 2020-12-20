import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toJSDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar';
import { CustomerService } from 'src/app/core/services/customer.service';
import { RoomService } from 'src/app/core/services/room.service';
import { CustomerCU } from 'src/app/shared/models/customerCU';
import { CustomerDetail } from 'src/app/shared/models/customerdetail';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {

  customerId:number;
  customer:CustomerDetail;
  customerRequest: CustomerCU = {};
  updateFormVis:boolean = false;
  
  constructor(private route: ActivatedRoute, private customerService:CustomerService, private roomService:RoomService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (p) =>{
        
        this.customerId = +p.get('id');
        this.customerService.getCustomerDetailById(this.customerId).subscribe(
          c => {
            this.customer = c;
            console.log(this.customer);
          }
        )
      }
    )

  }

  DeleteC(){
    this.customerService.deleteOne(this.customerId).subscribe();
    let updateroom = this.customer.room;
    updateroom.status = false;
    this.roomService.UpdateOne(updateroom).subscribe();
  }

  update(){
    console.log(this.customerRequest);
    this.customerRequest.id = this.customerId;
    this.customerRequest.checkIn = this.customer.checkIn;
    this.customerService.UpdateOne(this.customerRequest).subscribe();
  }

}
