import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {

  constructor( private userService: UserService){
    this.userService;
  }
  user = this.userService.users

    userCards = [
      {
        type: 'debit',
        cardNumber: '1234567812345678',
        cardHolder: this.user.fullName,
        expiry: '12/26',
        cvv: '123'
      },
      {
        type: 'debit',
        cardNumber: '12345678123972654',
        cardHolder: this.user.fullName,
        expiry: '12/26',
        cvv: '123'
      },
      {
        type: 'credit',
        cardNumber: '8765432187654321',
        cardHolder: this.user.fullName,
        expiry: '08/25',
        cvv: '456'
      },
      {
        type: 'credit',
        cardNumber: '8765432187658924',
        cardHolder: this.user.fullName,
        expiry: '08/25',
        cvv: '456'
      }
    ];
  }

