import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthenticationService } from './authService/authentication.service';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, AdmindashboardComponent],
  imports: [HttpClientModule, FormsModule, BrowserModule, AppRoutingModule],
  providers: [AuthenticationService],
  bootstrap: [AppComponent],
})
export class AppModule {}
