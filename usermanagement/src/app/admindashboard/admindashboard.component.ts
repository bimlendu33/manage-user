import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { EmployeeDetails } from '../constants/manage-user-constants';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AdmindashboardComponent implements OnInit {
  employeeList: [EmployeeDetails];
  constructor() {}

  ngOnInit(): void {}

  getlistOfEmployee() {}
}
