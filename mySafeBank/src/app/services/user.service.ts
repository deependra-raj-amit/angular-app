import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

 

  
  

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('loggedInUser') || '{}');
    
  }

  getCurrentUserEmail(): string {
    return this.getCurrentUser()?.email || '';
  }

  getCurrentUserBalance(): number {
    return this.getCurrentUser()?.balance || 0;
  }

  
  getAllUsers(): any[] {
  return JSON.parse(localStorage.getItem('users') || '[]');
}
users = JSON.parse(localStorage.getItem('loggedInUser') || '[]');
  //userName = this.users.fullName;

  //accountNumber = 
 
  loginTime = JSON.parse(localStorage.getItem('loginTime') || '[]');

}
