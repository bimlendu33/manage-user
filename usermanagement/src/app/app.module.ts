import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthenticationService } from './authService/authentication.service';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { EmployeeService } from './employeeService/employee-service.service';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { SearchPipe } from './filters/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdmindashboardComponent,
    EmployeedetailsComponent,
    SearchPipe,
  ],
  imports: [HttpClientModule, FormsModule, BrowserModule, AppRoutingModule],
  providers: [EmployeeService, AuthenticationService],
  bootstrap: [AppComponent],
})
export class AppModule {}
