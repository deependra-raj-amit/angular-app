import { Component } from '@angular/core';
import { TransactionService } from '../../services/transaction.service';
import { CustomTransaction } from '../../services/transaction.service'; // Add this import

@Component({
  selector: 'app-fund-transfer',
  templateUrl: './fund-transfer.component.html',
  styleUrls: ['./fund-transfer.component.css']
})
export class FundTransferComponent {
  toAccount: string = '';
  ifsc: string = '';
  name: string = '';
  amount: number | null = null;
  confirmationMessage: string = ''; 

  constructor(private transactionService: TransactionService) {}

  submitTransfer() {
    if (this.amount === null || this.amount <= 0) {
      this.confirmationMessage = 'Please enter a valid amount greater than 0.';
      return; // Prevent further execution if amount is invalid
    }
    if(this.toAccount===null && this.ifsc === null && this.name === null ){
      this.confirmationMessage = "All fields are required"
      return;
    }

    let type: 'Credit' | 'Debit' = 'Debit'; 
  
    if (this.amount > 0) {
      type = 'Debit';  
    }
  
    const transaction: CustomTransaction = {
      date: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
      description: `NEFT to Acc - ${this.toAccount} | Name - ${this.name}`,
      type: type, 
      amount: `₹${this.amount.toLocaleString('en-IN')}.00`,
      balance: '',  
    };
  

    this.transactionService.addTransaction(transaction);

    this.confirmationMessage = `₹${this.amount.toLocaleString('en-IN')}.00 has been sent to ${this.name} (Acc: ${this.toAccount}).`;
    
    this.toAccount = '';
    this.ifsc = '';
    this.name = '';
    this.amount = null;
  }
}
