import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-account-summary',
  templateUrl: './account-summary.component.html',
  styleUrls: ['./account-summary.component.css']
})
export class AccountSummaryComponent {

  constructor(private userService: UserService){
    this.userService;
  }

  transactions = [
    { date: '17-Apr-2025', description: 'ATM Withdrawal', type: 'Debit', amount: '₹5,000.00', balance: '₹2,45,000.00' },
    { date: '16-Apr-2025', description: 'Salary Credit', type: 'Credit', amount: '₹50,000.00', balance: '₹2,50,000.00' },
    { date: '15-Apr-2025', description: 'Electricity Bill', type: 'Debit', amount: '₹1,200.00', balance: '₹2,00,000.00' },
    { date: '12-Apr-2025', description: 'Account Transfer', type: 'Debit', amount: '₹10,000.00', balance: '₹2,01,200.00' },
    { date: '10-Apr-2025', description: 'Interest Credit', type: 'Credit', amount: '₹1,000.00', balance: '₹2,11,200.00' },
  ]

 
  users = this.userService.users;
  userName = this.users.fullName;
  accountNumber = this.users.accountNumber;
  loginTime = this.users.loginTime;

}
