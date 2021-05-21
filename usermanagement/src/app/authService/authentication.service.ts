import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../constants/manage-user-constants';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  path = '../../';

  constructor(private http: HttpClient) {}

  authenticateUser(): Observable<User> {
    return this.http.get<User>('./assets/data/loggedinuser.json');
  }
}
