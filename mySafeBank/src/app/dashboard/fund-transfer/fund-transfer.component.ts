import { Component } from '@angular/core';
import { TransactionService } from '../../services/transaction.service';
import { CustomTransaction } from '../../services/transaction.service';
import { UserService } from '../../services/user.service';

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
  errorMessage: string = '';
  status: boolean = false;
  constructor(private transactionService: TransactionService, private userService: UserService) {
    this.userService;
  }
  users = this.userService.users;
  availableBalance = `₹${(this.users.balance || 0).toLocaleString('en-IN')}.00`;


  submitTransfer() {
    if (this.amount === null || this.amount <= 0) {
      this.errorMessage = 'Please enter a valid amount greater than 0.';
      return; 
    }
    if(this.toAccount===null && this.ifsc === null && this.name === null ){
      this.errorMessage = "All fields are required"
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
      //status = true;
    };
  

    this.transactionService.addTransaction(transaction);
    this.confirmationMessage = `₹${this.amount} has been sent to ${this.toAccount} successfully` 
   
    
    this.toAccount = '';
    this.ifsc = '';
    this.name = '';
    this.amount = null;
  }
}
