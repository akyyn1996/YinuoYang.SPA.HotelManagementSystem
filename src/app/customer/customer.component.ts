import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../core/services/customer.service';
import { Customer } from '../shared/models/customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customers:Customer[];
  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.customerService.getAllCustomer().subscribe(
      (m) => {this.customers = m
      });
  }

}
