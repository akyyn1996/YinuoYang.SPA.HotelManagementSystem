import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/core/services/customer.service';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  CreateInformation:CustomerCU = {

    cName: "",
    address: "",
    phone: "",
    email: "",
    totalPersons: null,
    bookingDays: null,
    advance: null,
  }
  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
  }

  create(){
    console.log(this.CreateInformation);
    this.customerService.createNew(this.CreateInformation).subscribe();
  }

}
