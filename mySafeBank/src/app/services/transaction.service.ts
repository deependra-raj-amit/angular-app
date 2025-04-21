import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface CustomTransaction {
  date: string;
  description: string;
  type: 'Credit' | 'Debit';
  amount: string;
  balance: string;
}

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private currentBalance: number = 0;
  private customTransactions: CustomTransaction[] = [];
  private transactionSubject = new BehaviorSubject<CustomTransaction[]>([]);
  public transactions$ = this.transactionSubject.asObservable();

  private userKey: string = '';
  private loggedInUser: any = null;

  constructor() {
    this.initUserData();
  }

  private initUserData() {
    this.loggedInUser = JSON.parse(localStorage.getItem('loggedInUser') || '{}');
    this.userKey = this.loggedInUser?.email;

    if (!this.userKey) {
      console.error('No user is currently logged in.');
      return;
    }

    const allTransactions = JSON.parse(localStorage.getItem('transactions') || '{}');
    const allUsers = JSON.parse(localStorage.getItem('users') || '[]');

    this.customTransactions = allTransactions[this.userKey] || [];

    const userInList = allUsers.find((u: any) => u.email === this.userKey);
    this.currentBalance = this.loggedInUser.balance || userInList?.balance || 0;

    this.transactionSubject.next(this.customTransactions);
  }

  getUserTransactions(): CustomTransaction[] {
    return this.customTransactions;
  }

  refreshTransactions() {
    const allTransactions = JSON.parse(localStorage.getItem('transactions') || '{}');
    this.customTransactions = allTransactions[this.userKey] || [];
    this.transactionSubject.next(this.customTransactions);
  }

  addTransaction(transaction: CustomTransaction): { success: boolean; message: string } {
    if (!this.userKey) return { success: false, message: 'User not found' };

    const transactionAmount = parseFloat(transaction.amount.replace(/[₹,]/g, ''));

    if (transaction.type === 'Debit' && transactionAmount > this.currentBalance) {
      return { success: false, message: 'Insufficient funds' };
    }

    if (transaction.type === 'Debit') this.currentBalance -= transactionAmount;
    if (transaction.type === 'Credit') this.currentBalance += transactionAmount;

    const formattedBalance = `₹${this.currentBalance.toLocaleString('en-IN')}.00`;

    const updatedTransaction: CustomTransaction = {
      ...transaction,
      balance: formattedBalance
    };

    this.customTransactions = [updatedTransaction, ...this.customTransactions];
    this.transactionSubject.next(this.customTransactions);

    const allTransactions = JSON.parse(localStorage.getItem('transactions') || '{}');
    allTransactions[this.userKey] = this.customTransactions;
    localStorage.setItem('transactions', JSON.stringify(allTransactions));

    this.loggedInUser.balance = this.currentBalance;
    localStorage.setItem('loggedInUser', JSON.stringify(this.loggedInUser));

    const allUsers = JSON.parse(localStorage.getItem('users') || '[]');
    const userIndex = allUsers.findIndex((u: any) => u.email === this.userKey);
    if (userIndex !== -1) {
      allUsers[userIndex].balance = this.currentBalance;
      localStorage.setItem('users', JSON.stringify(allUsers));
    }

    return { success: true, message: 'Transaction successful' };
  }
}
