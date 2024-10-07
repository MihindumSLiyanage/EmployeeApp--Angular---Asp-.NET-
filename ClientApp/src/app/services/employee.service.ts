import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../models/employee.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeesService {
  baseApiUrl: string = environment.baseApiUrl;
  constructor(private http: HttpClient) {}

  getAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.baseApiUrl + 'api/Employee');
  }
  addEmployee(addEmployeeRequest: Employee): Observable<Employee> {
    addEmployeeRequest.employeeId = 0;
    return this.http.post<Employee>(
      this.baseApiUrl + 'api/Employee',
      addEmployeeRequest
    );
  }
  getEmployee(id: string): Observable<Employee> {
    return this.http.get<Employee>(this.baseApiUrl + 'api/Employee/' + id);
  }
  updateEmployee(
    id: number,
    updateEmployeeRequest: Employee
  ): Observable<Employee> {
    return this.http.put<Employee>(
      this.baseApiUrl + 'api/Employee/' + id,
      updateEmployeeRequest
    );
  }
  deleteEmployee(id: number): Observable<Employee> {
    return this.http.delete<Employee>(this.baseApiUrl + 'api/Employee/' + id);
  }
}
