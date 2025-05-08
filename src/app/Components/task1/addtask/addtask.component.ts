import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Task2Service } from '../../../Core/services/task2.service';
import { Status } from '../../../Core/Enum/status';
import { PriorityLevel } from '../../../Core/Enum/priority-level';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-addtask',
  standalone: true,
  imports: [ReactiveFormsModule,NgFor,NgIf],
  templateUrl: './addtask.component.html',
  styleUrl: './addtask.component.css'
})
export class AddtaskComponent {
  
    Task1Status = Status;
    statusKeys: number[] = [];
    PriorityLevel = PriorityLevel;
    priortyKeys: number[] = [];

   formadd!:FormGroup
    taskservice:Task2Service=inject(Task2Service)
    fb:FormBuilder=inject(FormBuilder)
    ngOnInit(): void {
      this.statusKeys = Object.keys(this.Task1Status)
      .filter(key => !isNaN(Number(key)))
      .map(key => Number(key));
      this.priortyKeys = Object.keys(this.PriorityLevel)
      .filter(key => !isNaN(Number(key)))
      .map(key => Number(key));
      this.formadd=this.fb.group({
              title:['',[Validators.required]],
              description:['',[Validators.required]],
              dueDate:['',[Validators.required]],
              status:['',[Validators.required]],
             priorityLevel:['',[Validators.required]],
  
      })
     
      
    }
    onsubmit(){
      if(this.formadd.invalid){
        this.formadd.markAllAsTouched();
        return;
      }
      this.taskservice.addtask(this.formadd.value).subscribe({
        next:(res)=>{
          console.log('res',res)
          this.formadd.reset()
        },
        error:(err)=>{
          console.log('err',err)
        }
      })
    }


}
