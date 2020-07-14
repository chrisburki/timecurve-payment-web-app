import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

import { User } from './user.model';
import { AuthData } from './auth-data.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  authChange = new Subject<boolean>();
  loadigStateChanged = new Subject<boolean>();
  private user: User = null;

  constructor(private router: Router) { }

  sleep(delay) {
    const sd = new Date().getTime();
    while (new Date().getTime() < sd + delay) {}
  }

  registerUser(authData: AuthData) {
    this.loadigStateChanged.next(true);
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 10000).toString()
    };
    this.authSuccessfully();
  }

  login(authData: AuthData) {
    this.loadigStateChanged.next(true);
//    this.sleep(3000);
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 10000).toString()
    };
    this.authSuccessfully();
  }

  logout() {
    this.user = null;
    this.authChange.next(false);
    this.router.navigate(['/login']);
  }

  getUser() {
    return { ...this.user };
  }

  isAuth() {
    console.log('user: ' + this.user);
    return this.user != null;
  }

  private authSuccessfully() {
    this.authChange.next(true);
    this.loadigStateChanged.next(false);
    this.router.navigate(['/payment']);
  }
}
