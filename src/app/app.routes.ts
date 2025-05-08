import { Routes } from '@angular/router';
import { NotfoundComponent } from './Components/notfound/notfound.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home22', pathMatch: 'full' },
    {path:'home22',loadComponent:()=>import('./Components/task1/hometask/hometask.component').then(x=>x.HometaskComponent)},
    {path:'addtask22',loadComponent:()=>import('./Components/task1/addtask/addtask.component').then(x=>x.AddtaskComponent)},
    {path:'details22/:id',loadComponent:()=>import('./Components/task1/detailstask/detailstask.component').then(x=>x.DetailstaskComponent)},
 { path: '**', component: NotfoundComponent }



];
