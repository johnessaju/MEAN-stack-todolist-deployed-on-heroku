//taskservice
import { Injectable } from '@angular/core';
import { getLocaleDateFormat } from '@angular/common';
import { HttpClient}  from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


import { Model } from '../model/model.model';

@Injectable({
  providedIn: 'root'
})
export class TaskserviceService {

   selectedtask: Model;
   tasks:Model[];

   readonly baseURL = 'tasks';


  constructor(private http: HttpClient) { }

  getdata(){

  return this.http.get(this.baseURL);

}

 putdata(task:Model){
    
   return this.http.post(this.baseURL, task);
   
  }

  editdata(task:Model){
  
    return this.http.put(this.baseURL+ `/${task._id}`,task);
  
}


deletedata(id:string){

  return this.http.delete(this.baseURL+ `/${id}`);

}


}
