import { Component } from '@angular/core';
import { DepositRecord } from './deposit-list/deposit-list.component';
import { UserService } from '../services/user.service';
import { TransactionService } from '../services/transaction.service';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent {
  currentBalance: number = 0;
  depositHistory: DepositRecord[] = [];

  constructor(
    private userService: UserService,
    private transactionService: TransactionService
  ) {
    this.currentBalance = this.userService.getCurrentUserBalance();
    this.loadDepositHistory();
  }

  onAmountDeposited(amount: number) {
    const success = this.transactionService.addTransaction({
      date: new Date().toLocaleString(),
      description: 'Cash Deposit',
      type: 'Credit',
      amount: `₹${amount.toLocaleString('en-IN')}.00`,
      balance: '' 
    });

    if (success.success) {
      this.currentBalance = this.userService.getCurrentUserBalance();

      const newDeposit: DepositRecord = {
        date: new Date().toLocaleString(),
        amount
      };

      this.depositHistory.unshift(newDeposit);
      this.saveDepositHistory();
    } else {
      alert(success.message);
    }
  }

  private loadDepositHistory() {
    const email = this.userService.getCurrentUserEmail();
    const allDeposits = JSON.parse(localStorage.getItem('depositHistory') || '{}');
    this.depositHistory = allDeposits[email] || [];
  }

  private saveDepositHistory() {
    const email = this.userService.getCurrentUserEmail();
    const allDeposits = JSON.parse(localStorage.getItem('depositHistory') || '{}');
    allDeposits[email] = this.depositHistory;
    localStorage.setItem('depositHistory', JSON.stringify(allDeposits));
  }
}
