import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Z_FULL_FLUSH } from 'zlib';
import { CustomerCreateComponent } from './customer/customer-create/customer-create.component';
import { CustomerDetailComponent } from './customer/customer-detail/customer-detail.component';
import { CustomerComponent } from './customer/customer.component';
import { RoomComponent } from './room/room.component';
import { RoomtypeComponent } from './roomtype/roomtype.component';
import { ServiceComponent } from './service/service.component';

const routes: Routes = [
  {
    path:"",
    component: CustomerComponent,
  },
  {
    path:"customer/create",
    component: CustomerCreateComponent,
  },
  {
    path:"customer/:id",
    component: CustomerDetailComponent,
  },
  {
    path:"customer",
    redirectTo:"",
  },
  {
    path:"roomtype",
    component: RoomtypeComponent,
  },
  {
    path:"service",
    component: ServiceComponent,
  },
  {
    path:"room",
    component: RoomComponent,
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
