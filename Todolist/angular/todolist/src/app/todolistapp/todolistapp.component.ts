//task component
import { Component, OnInit } from '@angular/core';

import { NgForm} from '@angular/forms';

import { TaskserviceService } from '../service/taskservice.service';
import { Model } from '../model/model.model';

@Component({
  selector: 'app-todolistapp',
  templateUrl: './todolistapp.component.html',
  styleUrls: ['./todolistapp.component.css']
})
export class TodolistappComponent implements OnInit {
 
  

  constructor(public taskservice:TaskserviceService) {
   }

  ngOnInit(): void {
    this.refresh();
    this.resetForm();
    }
    
 

 refresh(){
   this.taskservice.getdata().subscribe((res)=>{
this.taskservice.tasks=res as Model[];  //returns an observable so save data to tasks we use "as"
   });
 }

 resetForm(form?: NgForm) { // form?: means form is not necessary as input
  if (form)
    form.reset();
  this.taskservice.selectedtask = {
    _id: "",
    task: ""
    }
}


submitdata(taskform:NgForm){
  if(taskform.value._id==""){ // to push new data
  this.taskservice.putdata(taskform.value).subscribe((res)=>{
   this.resetForm(taskform);
   this.refresh();
  });
 }
 else{ // to push old edited data
   this.taskservice.editdata(taskform.value).subscribe((res)=>{
   this.resetForm(taskform);
   this.refresh();
   });
 }
}


 delete(id:string){
  this.taskservice.deletedata(id).subscribe((res)=>{
    this.refresh();
  });
   }

   
 edit(task:Model){
  this.taskservice.selectedtask=task;
   }
  }
