import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private router: Router, private userService: UserService) {
    this.router;
  }
 


  features = [
    { title: 'Transactions', icon: 'assets/icons/account.png', route: '/transactions' },
    { title: 'Cards', icon: 'assets/icons/cards.png', route: '/cards' },
    { title: 'Transfer Money', icon: 'assets/icons/transfer.png', route: '/fund-transfer' },
    { title: 'Bill Payments', icon: 'assets/icons/bill.png', route: '/bills' },
    { title: 'Loans', icon: 'assets/icons/loans.png', route: '/loans' },
    { title: 'Investments', icon: 'assets/icons/investments.png', route: '/investments' },
    { title: 'UPI', icon: 'assets/icons/upi.png', route: '/upi' },
    { title: 'Insurance', icon: 'assets/icons/insurance.png', route: '/insurance' }
  ];
  
  navigate(route: string) { 
    this.router.navigate([route]);
  }
  
  users = this.userService.users;
  userName = this.users.fullName;
  accountNumber = this.users.accountNumber;
  availableBalance = ""

}
