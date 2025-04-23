import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-deposit-money',
  templateUrl: './deposit-money.component.html',
  styleUrls: ['./deposit-money.component.css']
})
export class DepositMoneyComponent {
  amount: number = 0;
  errorMessage: string = '';

  @Output() deposit = new EventEmitter<number>();

  handleDeposit() {
    if (this.amount <= 0) {
      this.errorMessage = 'Please enter a valid amount greater than 0 ';
      return;
    }

    this.deposit.emit(this.amount);
    this.amount = 0; 
  }
}
