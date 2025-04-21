import { Component, Input } from '@angular/core';

export interface DepositRecord {
  date: string;
  amount: number;
}

@Component({
  selector: 'app-deposit-list',
  templateUrl: './deposit-list.component.html',
  styleUrls: ['./deposit-list.component.css']
})
export class DepositListComponent {
  @Input() deposits: DepositRecord[] = [];
}
