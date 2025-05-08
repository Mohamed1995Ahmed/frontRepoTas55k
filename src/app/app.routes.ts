import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:'home',loadComponent:()=>import('./Components/home/home.component').then(x=>x.HomeComponent)},
    {path:'addtask',loadComponent:()=>import('./Components/addtask/addtask.component').then(x=>x.AddtaskComponent)},
    {path:'details/:id',loadComponent:()=>import('./Components/detailstask/detailstask.component').then(x=>x.DetailstaskComponent)},
    {path:'home22',loadComponent:()=>import('./Components/task1/hometask/hometask.component').then(x=>x.HometaskComponent)},
    {path:'addtask22',loadComponent:()=>import('./Components/task1/addtask/addtask.component').then(x=>x.AddtaskComponent)},
    {path:'details22/:id',loadComponent:()=>import('./Components/task1/detailstask/detailstask.component').then(x=>x.DetailstaskComponent)},




];
