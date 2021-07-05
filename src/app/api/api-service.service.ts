import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  ROOT_URL = "http://srv1.deniba.at:1984";
  constructor(private http: HttpClient) { }

  getMonitoring() {
    let body = 
    {​​​​​​
      "MetaInfo": {​​​​​​​​
        "Object": "Log",
        "Action": "query"
      }​​​​​​​​
    }​​​​​​​​
    return this.http.post(this.ROOT_URL+"/deniba", body).toPromise();
  }

}
