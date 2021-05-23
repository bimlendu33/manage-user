import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

import { EmployeeDetails } from '../constants/manage-user-constants';
import { EmployeeService } from '../employeeService/employee-service.service';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AdmindashboardComponent
  implements OnInit, OnDestroy, AfterViewInit
{
  employeeList: EmployeeDetails[];
  createEmployeeObj: any = {};
  employeesListSub: Subscription;
  deleteEmployee: boolean = false;
  employeeToBeDeleted: EmployeeDetails;
  searchText: string = '';
  @ViewChild('searchEmployee') searchEmployee: ElementRef;

  modal;
  modal1;
  span1;
  btn;
  span;
  designations: string[] = [
    'Select',
    'Software Developer',
    'Senior Software Developer',
    'Quality Assurance',
    'Technical Lead',
    'Manager',
  ];
  constructor(private _employeeService: EmployeeService) {}
  ngAfterViewInit(): void {
    this.modal = document.getElementById('confirmDeleteModal');
    this.modal1 = document.getElementById('createEmployeeModal');

    // Get the button that opens the modal
    this.btn = document.getElementById('myBtn');

    // Get the <span> element that closes the modal
    this.span = document.getElementsByClassName('closeDeleteModal')[0];
    this.span1 = document.getElementsByClassName('closeCreateEmployee')[0];
  }

  ngOnInit(): void {
    this.getlistOfEmployee();
  }

  createEmployee() {
    this.createEmployeeObj.empDesignation = 'Select';
    this.modal1.style.display = 'block';
  }

  addEmployee() {
    this.createEmployeeObj.empid = this.randomNumber(100, 1000000);
    this._employeeService.addEmployee(this.createEmployeeObj);
    this.modal1.style.display = 'none';
  }

  randomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }
  closeCreateEmployeeModal() {
    this.modal1.style.display = 'none';
  }

  getlistOfEmployee() {
    this.employeesListSub = this._employeeService
      .employeesList()
      .subscribe((employees: EmployeeDetails[]) => {
        this.employeeList = employees;
      });
  }

  removeEmployee(i) {
    this.modal.style.display = 'block';
    this.deleteEmployee = !this.deleteEmployee;
    this.employeeToBeDeleted = this.employeeList[i];
  }

  closeModal() {
    this.modal.style.display = 'none';
  }

  confirmDelete() {
    if (this.deleteEmployee) {
      const indx = this.employeeList.findIndex((emp) => {
        return emp.empid === this.employeeToBeDeleted.empid;
      });
      this.employeeList.splice(indx, 1);
      this._employeeService.removeEmployee(this.employeeToBeDeleted);
      this.deleteEmployee = !this.deleteEmployee;
      this.modal.style.display = 'none';
    }
  }

  ngOnDestroy(): void {
    this.employeesListSub.unsubscribe();
  }
}
