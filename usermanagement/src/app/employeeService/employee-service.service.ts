import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { toArray } from 'rxjs/operators';
import { EmployeeDetails } from '../constants/manage-user-constants';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private _http: HttpClient) {}

  employeesList(): Observable<EmployeeDetails[]> {
    return from(this.dataSourceEmployees).pipe(toArray());
  }

  removeEmployee(employee: EmployeeDetails): void {
    this._http.delete('url' + '/' + employee.empid);
  }

  getEmployeeDetails(empId: number): Observable<EmployeeDetails> {
    const empDetails = this.dataSourceEmployees.find((emp) => {
      return emp.empid === empId;
    });
    return of(empDetails);
  }

  updateEmployee(updatedEmployee: EmployeeDetails): void {
    const empIndex = this.dataSourceEmployees.findIndex((data) => {
      return data.empid === updatedEmployee.empid;
    });
    this.dataSourceEmployees[empIndex] = Object.assign({}, updatedEmployee);
  }

  addEmployee(employee: EmployeeDetails): void {
    this.dataSourceEmployees.push(employee);
  }

  dataSourceEmployees: EmployeeDetails[] = [
    {
      empid: 101,
      empName: 'Test User 1',
      empEmailID: 'testuser1@gmail.com',
      empContact: 9741556378,
      empDesignation: 'Manager',
    },
    {
      empid: 102,
      empName: 'Test User 2',
      empEmailID: 'testuser2@gmail.com',
      empContact: 9741556378,
      empDesignation: 'Software Developer',
    },
    {
      empid: 103,
      empName: 'Test User 3',
      empEmailID: 'testuser3@gmail.com',
      empContact: 9741556378,
      empDesignation: 'Senior Software Developer',
    },
    {
      empid: 104,
      empName: 'Test User 4',
      empEmailID: 'testuser4@gmail.com',
      empContact: 9741556378,
      empDesignation: 'Software Developer',
    },
    {
      empid: 105,
      empName: 'Test User 5',
      empEmailID: 'testuser5@gmail.com',
      empContact: 9741556378,
      empDesignation: 'Software Developer',
    },
    {
      empid: 106,
      empName: 'Test User 6',
      empEmailID: 'testuser6@gmail.com',
      empContact: 9741556378,
      empDesignation: 'Technical Lead',
    },
    {
      empid: 107,
      empName: 'Test User 7',
      empEmailID: 'testuser7@gmail.com',
      empContact: 9741556378,
      empDesignation: 'Software Developer',
    },
    {
      empid: 108,
      empName: 'Test User 8',
      empEmailID: 'testuser8@gmail.com',
      empContact: 9741556378,
      empDesignation: 'Quality Assurance',
    },
    {
      empid: 109,
      empName: 'Test User 9',
      empEmailID: 'testuser9@gmail.com',
      empContact: 9741556378,
      empDesignation: 'Technical Lead',
    },
    {
      empid: 110,
      empName: 'Test User 10',
      empEmailID: 'testuser10@gmail.com',
      empContact: 9741556378,
      empDesignation: 'Quality Assurance',
    },
  ];
}
