import { Status } from './../../../Core/Enum/status';
import { Component } from '@angular/core';
import { Task2Service } from '../../../Core/services/task2.service';
import { Displaytask22 } from '../../../Core/Interfaces/displaytask22';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { PriorityLevel } from '../../../Core/Enum/priority-level';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';
import { app } from '../../../../../server';

@Component({
  selector: 'app-hometask',
  standalone: true,
  imports: [CommonModule, FormsModule,ReactiveFormsModule],
  templateUrl: './hometask.component.html',
  styleUrl: './hometask.component.css'
})
export class HometaskComponent {
  editid:any|null=null
  formedit!:FormGroup;
 
  tasks!:Displaytask22
  page:number=1
  pagesize:number=10
  status:number|null=null
  searchTitle: string = '';

  Task1Status = Status;
  statusKeys: number[] = [];
  PriorityLevel = PriorityLevel;
  priortykeys: number[] = [];


  constructor(private taskservice:Task2Service,private fb:FormBuilder){}
  ngOnInit(): void {
    this.statusKeys = Object.keys(this.Task1Status)
    .filter(key => !isNaN(Number(key)))
    .map(key => Number(key));
    this.priortykeys = Object.keys(this.PriorityLevel)
    .filter(key => !isNaN(Number(key)))
    .map(key => Number(key));
      this.formedit=this.fb.group({
          title:['',[Validators.required]],
          description:['',[Validators.required]],
          dueDate:['',[Validators.required]],
          status:['',[Validators.required]],
          priorityLevel:['',[Validators.required]],
        })
    this.loadtasks();

    
  }
  loadtasks(){
    this.taskservice.getallwithfilterandpagination(this.status!,this.searchTitle.trim().toLowerCase(),this.page,this.pagesize).subscribe({
      next:(res)=>{
        this.tasks=res;
        console.log('res',res)
      },error:(err)=>{
        console.log('err',err)
      }
    })
  }
  changepages(p:number){
    this.page=p
    this.loadtasks()
  }
 get totalpages():number[]{
    if (!this.tasks?.count) return [];
    const taotalpage=Math.ceil(this.tasks.count/this.pagesize);
    return Array.from({length:taotalpage}, (_, i) => i + 1);

  }

  // onSearchChange(event: Event) {
  //   const input = event.target as HTMLInputElement;
  //   const value = input.value;
  
  //   this.searchTitle = value; 
   
  //   this.applyfilters()          

  // }

  applyfilters(){
    this.page=1;
    this.loadtasks();
  }
  onedit(task:any){
    this.editid=task.id;
    const rawDate = new Date(task.dueDate);
    const formattedDate = rawDate.toISOString().split('T')[0];
    this.formedit.patchValue({
      title:task.title,
      description:task.description,
      dueDate:formattedDate,
      status:task.status,
      priorityLevel:task.priorityLevel,


    })

}
oncaceling(){
  this.editid=null;
  this.formedit.reset()
}
onupdate(id:any){
  this.taskservice.updatetask(id,this.formedit.value).subscribe({
    next:(res)=>{
      this.editid=null;
      this.formedit.reset()
      this.loadtasks()
      console.log(res)
      
    },
    error:(err)=>{
      console.log(err)
    }
  })
}
ondelete(id:any){
  this.taskservice.deletetask(id).subscribe({
    next:(res)=>{
      console.log(res)
      this.loadtasks()
    },error:(err)=>{
      console.log(err)
    }
  })
}

}
