import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task1Response } from '../Interfaces/task1-response';
import { Displaytask22 } from '../Interfaces/displaytask22';

@Injectable({
  providedIn: 'root'
})
export class Task2Service {

  constructor(private http:HttpClient) { }
  getall():Observable<any>{
    return this.http.get(`http://localhost:5164/api/Task1/getall`);
  }
  getallwithfilterandpagination(status?:number,searchTitle?:string,page:number=1,pagesize:number=10):Observable<any>{
    let params=new HttpParams().set('page',page).set('pagesize',pagesize);
    if(status !=undefined) params= params.set('status',status);
     
    if(searchTitle)  params= params.set('searchTitle',searchTitle);
     


    return this.http.get<Displaytask22>(`http://localhost:5164/api/Task1/getall`,{params})
  }
  updatetask(id:any,task:any):Observable<any>{
    return this.http.put(`http://localhost:5164/api/Task1/wdit?id=${id}`,task)

  }
  deletetask(id:any):Observable<any>{
    return this.http.delete(`http://localhost:5164/api/Task1/delete?id=${id}`)
    
  }
  addtask(task:any):Observable<any>{
    return this.http.post(`http://localhost:5164/api/Task1/add`,task);
  }
  detailstask(id:any):Observable<any>{
    return this.http.get(`http://localhost:5164/api/Task1/getbyid?id=${id}`)
    
  }
  getTasks(status?: string, searchTitle?: string, page: number = 1, pageSize: number = 10): Observable<Task1Response> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('pageSize', pageSize.toString());

    if (status) params = params.set('status', status);
    if (searchTitle) params = params.set('searchTitle', searchTitle);

    return this.http.get<Task1Response>(`http://localhost:5164/api/Task1/getall`, { params });
  }

}
