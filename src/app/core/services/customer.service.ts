import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/shared/models/customer';
import { CustomerDetail } from 'src/app/shared/models/customerdetail';
import { ApiService } from './api.service';
import {map} from 'rxjs/operators';

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

  createNew(model: CustomerCU):Observable<boolean>{
    //return this.apiService.create('customer',model);
    return this.apiService.create('customer', model).pipe(
      map((response) => {
        if (response) {
          console.log(response);
          return true;
        }

        return false;
      })
    );


    }
  deleteOne(id:number):Observable<boolean>{
    console.log(id);
    return this.apiService.Delete('customer',id).pipe(
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
