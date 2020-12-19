import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/shared/models/customer';
import { CustomerDetail } from 'src/app/shared/models/customerdetail';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private apiService:ApiService) {

   }

  getAllCustomer(): Observable<Customer[]>{
    return this.apiService.getAll("customer");

  }
  getCustomerDetailById(id:number):Observable<CustomerDetail>{
    return this.apiService.getOne('customer', id);

  }

}
