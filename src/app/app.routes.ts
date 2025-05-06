import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:'home',loadComponent:()=>import('./Components/home/home.component').then(x=>x.HomeComponent)},
    {path:'addtask',loadComponent:()=>import('./Components/addtask/addtask.component').then(x=>x.AddtaskComponent)},
    {path:'details',loadComponent:()=>import('./Components/detailstask/detailstask.component').then(x=>x.DetailstaskComponent)},


];
