import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-check-balance',
  templateUrl: './check-balance.component.html',
  styleUrls: ['./check-balance.component.css']
})
export class CheckBalanceComponent {
  @Input() balance: number = 0;
}
