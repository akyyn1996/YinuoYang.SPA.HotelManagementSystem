import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../core/services/service.service';
import { Service } from '../shared/models/service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  services: Service[];
  serviceRequest: Service={};
  createFormVis:boolean = false;
  updateFormVis:boolean = false;  

  constructor(private serviceService: ServiceService) { }

  ngOnInit(): void {
    this.serviceService.getAllServices().subscribe((g) => {
      this.services = g;
    })
  }

  Delete(id:number){
    console.log(id);
    this.serviceService.deleteOne(id).subscribe();
  }

  create(){
    console.log(this.serviceRequest);
    this.serviceService.createNew(this.serviceRequest).subscribe();
  }
  update(){
    console.log(this.serviceRequest);
    for (let i = 0; i < this.services.length; i++) {
      const element = this.services[i];
      if (element.id = this.serviceRequest.id) {
        this.serviceRequest.serviceDate = element.serviceDate;
        break;
      }
    }

    this.serviceService.UpdateOne(this.serviceRequest).subscribe();
  }

}
