import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule  } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/layout/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RoomtypeComponent } from './roomtype/roomtype.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerCardComponent } from './shared/components/customer-card/customer-card.component';
import { CustomerDetailComponent } from './customer/customer-detail/customer-detail.component';
import { CustomerCreateComponent } from './customer/customer-create/customer-create.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { RoomComponent } from './room/room.component';
import { ServiceComponent } from './service/service.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RoomtypeComponent,
    CustomerComponent,
    CustomerCardComponent,
    CustomerDetailComponent,
    CustomerCreateComponent,
    RoomComponent,
    ServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
