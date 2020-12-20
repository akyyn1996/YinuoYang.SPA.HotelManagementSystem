import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toJSDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar';
import { CustomerService } from 'src/app/core/services/customer.service';
import { Customer } from 'src/app/shared/models/customer';
import { CustomerDetail } from 'src/app/shared/models/customerdetail';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {

  customerId:number;
  customer:CustomerDetail;
  constructor(private route: ActivatedRoute, private customerService:CustomerService) { }

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
  }

}
