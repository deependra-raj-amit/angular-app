import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  users = JSON.parse(localStorage.getItem('loggedInUser') || '[]');
  //userName = this.users.fullName;

  //accountNumber = 

  loginTime = JSON.parse(localStorage.getItem('loginTime') || '[]');

  
}
