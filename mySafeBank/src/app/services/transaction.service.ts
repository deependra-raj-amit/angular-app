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
  private currentBalance: number;
  private customTransactions: CustomTransaction[] = [];
  private transactionSubject = new BehaviorSubject<CustomTransaction[]>([]);

  public transactions$ = this.transactionSubject.asObservable();

  constructor() {
    const savedTransactions = localStorage.getItem('transactions');
    const savedBalance = localStorage.getItem('balance');

    this.customTransactions = savedTransactions ? JSON.parse(savedTransactions) : [];
    this.currentBalance = savedBalance ? parseFloat(savedBalance) : 245000;

    this.transactionSubject.next(this.customTransactions);
  }

  addTransaction(transaction: CustomTransaction) {
    const transactionAmount = parseFloat(transaction.amount.replace(/[₹,]/g, ''));
    if (transaction.type === 'Debit') this.currentBalance -= transactionAmount;
    if (transaction.type === 'Credit') this.currentBalance += transactionAmount;

    const formattedBalance = `₹${this.currentBalance.toLocaleString('en-IN')}.00`;

    const updatedTransaction = {
      ...transaction,
      balance: formattedBalance
    };

    this.customTransactions = [updatedTransaction, ...this.customTransactions];
    this.transactionSubject.next(this.customTransactions);

    localStorage.setItem('transactions', JSON.stringify(this.customTransactions));
    localStorage.setItem('balance', this.currentBalance.toString());
  }
}
