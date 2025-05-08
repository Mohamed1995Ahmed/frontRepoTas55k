import { PriorityLevel } from './../../../Core/Enum/priority-level';
import { Status } from './../../../Core/Enum/status';
import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { Displaytask } from '../../../Core/Interfaces/displaytask';
import { Task2Service } from '../../../Core/services/task2.service';
import { DatePipe, NgClass } from '@angular/common';


@Component({
  selector: 'app-detailstask',
  standalone: true,
  imports: [NgClass,DatePipe],
  templateUrl: './detailstask.component.html',
  styleUrl: './detailstask.component.css'
})
export class DetailstaskComponent {
  Status=Status
  PriorityLevel=PriorityLevel
  task!:Displaytask
  
    constructor(private taskservice:Task2Service,private router:ActivatedRoute){}
    loadtask(){
      const id=this.router.snapshot.paramMap.get('id')
      this.taskservice.detailstask(id).subscribe({
        next:(res)=>{
          this.task=res;
        },
        error:(err)=>{
          console.log(err)
        }
  
      })
    }
    ngOnInit(): void {
     this.loadtask()
      
    }
    getPriorityKey(value: number): string {
      return PriorityLevel[value] ?? 'Unknown';
    }
    getStatusKey(value: number): string {
      return Status[value] ?? 'Unknown';
    }
    
    

}
