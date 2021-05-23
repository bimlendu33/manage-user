import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeDetails } from '../constants/manage-user-constants';
import { EmployeeService } from '../employeeService/employee-service.service';

@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css'],
})
export class EmployeedetailsComponent implements OnInit {
  empId;
  employee: EmployeeDetails;
  designations: string[] = [
    'Software Developer',
    'Senior Software Developer',
    'Quality Assurance',
    'Technical Lead',
    'Manager',
  ];
  constructor(
    private _route: ActivatedRoute,
    private _employeeService: EmployeeService
  ) {
    this._route.params.subscribe((params: any) => {
      this.empId = params.id;
    });
  }

  ngOnInit(): void {
    this._employeeService
      .getEmployeeDetails(parseInt(this.empId))
      .subscribe((emp: EmployeeDetails) => {
        this.employee = emp;
      });
  }
  updateEmployee() {
    this._employeeService.updateEmployee(this.employee);
  }
}
