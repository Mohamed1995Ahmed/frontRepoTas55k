import { Component, NgModule } from '@angular/core';
import { Task2Service } from '../../Core/services/task2.service';
import { FormBuilder, FormGroup,   FormsModule,   NgModel,   ReactiveFormsModule, Validators } from '@angular/forms';
import { Displaytask } from '../../Core/Interfaces/displaytask';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  tasks!:Displaytask[]
  editid:any|null=null
  formedit!:FormGroup;
  page = 1;
  pageSize = 10;
  statusFilter: string = '';
  titleSearch: string = '';

  constructor(private taskservices:Task2Service,private fb:FormBuilder){}
 
  loadTasks(): void {
    this.taskservices.getTasks(this.statusFilter, this.titleSearch, this.page, this.pageSize)
      .subscribe(rse => {
        this.tasks = rse.data;
      });
  }
  onSearch(): void {
    this.page = 1; 
    this.loadTasks();
  }

  onPageChange(newPage: number): void {
    this.page = newPage;
    this.loadTasks();
  }
  ngOnInit(): void {
    this.loadTasks
    this.formedit=this.fb.group({
      title:['',[Validators.required]],
      description:['',[Validators.required]],
      dueDate:['',[Validators.required]],
      status:['',[Validators.required]],
      descripriorityLevelption:['',[Validators.required]],
    })
   
    
  }
  onedit(task:any){
    this.editid=task.id;
    this.formedit.patchValue({
      title:task.title,
      description:task.description,
      dueDate:task.description,
      status:task.description,
      priorityLevel:task.description,


    })

  }
  oncaceling(){
    this.editid=null;
    this.formedit.reset()
  }
  onupdate(id:any){
    this.taskservices.updatetask(id,this.formedit.value).subscribe({
      next:(res)=>{
        console.log(res)
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }
  ondelete(id:any){
    this.taskservices.deletetask(id).subscribe({
      next:(res)=>{
        console.log(res)
      },error:(err)=>{
        console.log(err)
      }
    })
  }


}
