import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private router: Router, private userService: UserService) {
    this.router;
  }
  logout(){
    localStorage.removeItem('loggedInUser');
    this.router.navigate(['/login']);
  }
  users = this.userService.users;
  userName = this.users.fullName;


}
