import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Z_FULL_FLUSH } from 'zlib';
import { CustomerDetailComponent } from './customer/customer-detail/customer-detail.component';
import { CustomerComponent } from './customer/customer.component';

const routes: Routes = [
  {
    path:"",
    component: CustomerComponent,
  },
  {
    path:"customer/:id",
    component: CustomerDetailComponent,
  },
  {
    path:"customer",
    redirectTo:"",
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
