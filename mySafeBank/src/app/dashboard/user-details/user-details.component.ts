import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {

  constructor(private userService: UserService, private router: Router) {
    this.userService;
    this.router;
  }
  users = this.userService.users;
  userName = this.users.fullName;
  accountNumber = this.users.accountNumber;
  userEmail = this.users.email;
  userPhone = this.users.phone;

  logout(){
    localStorage.removeItem('loggedInUser');
    this.router.navigate(['/login']);
  }

  closeAccount() {
    if (confirm('Are you sure you want to close your account? This action cannot be undone.')) {
      const usersData = localStorage.getItem('users');
      const loggedInUserData = localStorage.getItem('loggedInUser');
  
      if (usersData && loggedInUserData) {
        let users = JSON.parse(usersData);
        const loggedInUser = JSON.parse(loggedInUserData);
  
        users = users.filter((user: any) => user.email !== loggedInUser.email);
        localStorage.setItem('users', JSON.stringify(users));
        localStorage.removeItem('loggedInUser');
        this.router.navigate(['/signup']);
      }
    }
  }
  
}
