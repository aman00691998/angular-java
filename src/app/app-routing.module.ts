import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [


  { path: 'employee', component: EmployeeListComponent },
  { path: 'create-employee', component: CreateEmployeeComponent },
  { path: '', redirectTo: 'employees', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
