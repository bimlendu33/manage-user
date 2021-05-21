import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { Router } from '@angular/router';
import { fromEvent } from 'rxjs';
import { AuthenticationService } from '../authService/authentication.service';
import { User } from '../constants/manage-user-constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class LoginComponent implements OnInit, AfterViewInit {
  username: string;
  password: string;
  errorMsg: string = '';

  @ViewChild('usernameref') usernameref: ElementRef;
  @ViewChild('passwordref') passwordref: ElementRef;
  constructor(
    private _authService: AuthenticationService,
    private _router: Router
  ) {}

  ngAfterViewInit(): void {
    /* 
      this is to enable enter functionality for login
    */
    fromEvent(this.usernameref.nativeElement, 'keyup').subscribe((res: any) => {
      if (res.keyCode === 13) {
        this.userlogin();
      }
    });
    fromEvent(this.passwordref.nativeElement, 'keyup').subscribe((res: any) => {
      if (res.keyCode === 13) {
        this.userlogin();
      }
    });
  }

  ngOnInit(): void {}

  userlogin() {
    /* 
      just to keep simple, have only added direct login,
      for security we can also use encryption menthodology for password
     */
    this._authService.authenticateUser().subscribe((user: User) => {
      if (this.username === user.name && this.password === user.password) {
        if (user.role === 'admin') {
          this.errorMsg = '';
          this._router.navigate(['/useradmin-dashboard']);
        } else {
          this.errorMsg =
            'You are not authorized, please contact administration';
          console.log('You are not authorized, please contact administration');
        }
      } else {
        this.errorMsg = 'invalid creadentials';
        console.log('invalid creadentials');
      }
    });
  }
}
