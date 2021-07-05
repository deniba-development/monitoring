import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from './api/api-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  prelaoder = false;
  eventLog:any[] = [];

  constructor(public http: ApiServiceService) {}

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.prelaoder = true;
    this.http.getMonitoring().then((el:any) => {
      console.log(el)
      this.eventLog = el.EventLog;
      this.prelaoder=false
    }).catch(el => console.log(el))  
  }
  

}
