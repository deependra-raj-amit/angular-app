import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { TransactionService } from 'src/app/services/transaction.service';
import { TransactionsComponent } from '../transactions/transactions.component';
import { CustomTransaction } from 'src/app/services/transaction.service';

@Component({
  selector: 'app-account-summary',
  templateUrl: './account-summary.component.html',
  styleUrls: ['./account-summary.component.css']
})
export class AccountSummaryComponent implements OnInit  {

  transactions: CustomTransaction[] = [];
  //latestTransactions = this.transactions.slice(0, 5);
  // userName: string = '';
  // accountNumber: string = '';
  // availableBalance: string = '';
  

  constructor(private userService: UserService, private transactionsComponent: TransactionsComponent, private transactionService: TransactionService){
    this.userService;
  }
  

  
  
    ngOnInit(): void {
      const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser') || '{}');
  
      if (loggedInUser) {
        this.userName = loggedInUser.fullName;
        this.accountNumber = loggedInUser.accountNumber;
        this.availableBalance = `₹${(loggedInUser.balance || 0).toLocaleString('en-IN')}.00`;
      }
  
      this.transactionService.transactions$.subscribe((newTxList: CustomTransaction[]) => {
        this.transactions = [...newTxList];
      });

      
      //this.sortTransactions();

    }

    sortTransactions(): void {
      this.transactions.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()); 
    }
  

 
  users = this.userService.users;
  userName = this.users.fullName;
  accountNumber = this.users.accountNumber;
  loginTime = this.users.loginTime;
  availableBalance = `₹${(this.users.balance || 0).toLocaleString('en-IN')}.00`;

}
