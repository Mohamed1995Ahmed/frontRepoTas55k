import { Component } from '@angular/core';
import { Task2Service } from '../../Core/services/task2.service';
import { ActivatedRoute } from '@angular/router';
import { Displaytask } from '../../Core/Interfaces/displaytask';

@Component({
  selector: 'app-detailstask',
  standalone: true,
  imports: [],
  templateUrl: './detailstask.component.html',
  styleUrl: './detailstask.component.css'
})
export class DetailstaskComponent {
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

}
