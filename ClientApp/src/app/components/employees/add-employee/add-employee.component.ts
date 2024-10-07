import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../../../services/employee.service';
import { Router } from '@angular/router';
import { Employee } from '../../../models/employee.model';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css',
})
export class AddEmployeeComponent implements OnInit {
  addEmployeeRequest: Employee = {
    employeeId: 0,
    name: '',
    email: '',
    department: '',
  };
  constructor(
    private employeeService: EmployeesService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  addEmployee() {
    // console.log(this.addEmployeeRequest);
    this.employeeService.addEmployee(this.addEmployeeRequest).subscribe({
      next: (employee) => {
        this.router.navigate(['employees']);
      },
      error: (response) => {
        console.log(response);
      },
    });
  }
}
