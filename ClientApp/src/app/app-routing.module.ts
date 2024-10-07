import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './components/employees/add-employee/add-employee.component';
import { EditEmployeeComponent } from './components/employees/edit-employee/edit-employee.component';
import { ListEmployeeComponent } from './components/employees/list-employee/list-employee.component';

const routes: Routes = [
  {
    path: 'employees',
    component: ListEmployeeComponent,
  },
  {
    path: 'employees/add',
    component: AddEmployeeComponent,
  },
  {
    path: 'employees/edit/:id',
    component: EditEmployeeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
