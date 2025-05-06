import { Component, inject } from '@angular/core';
import { Task2Service } from '../../Core/services/task2.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-addtask',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './addtask.component.html',
  styleUrl: './addtask.component.css'
})
export class AddtaskComponent {
  formadd!:FormGroup
  taskservice:Task2Service=inject(Task2Service)
  fb:FormBuilder=inject(FormBuilder)
  ngOnInit(): void {
    this.formadd=this.fb.group({
            title:['',[Validators.required]],
            description:['',[Validators.required]],
            dueDate:['',[Validators.required]],
            status:['',[Validators.required]],
            descripriorityLevelption:['',[Validators.required]],

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
      },
      error:(err)=>{
        console.log('err',err)
      }
    })
  }

}
