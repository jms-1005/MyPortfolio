import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { HomePage } from '../interface';


@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private url = environment.server;
  constructor(private http: HttpClient) { }

  getHomeContent(){
    return this.http.get<HomePage>(this.url + '/api/about-me?populate=deep,3');
  }

  postLead(data:any){
    return this.http.post(this.url + '/api/leads', data);
  }

}
