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
        provider: 'Rupay',
        cardNumber: '1234567812345678',
        cardHolder: this.user.fullName,
        expiry: '12/26',
        cvv: '123'
      },
      {
        type: 'debit',
        provider: 'MasterCard',
        cardNumber: '12345678123972654',
        cardHolder: this.user.fullName,
        expiry: '12/29  ',
        cvv: '123'
      },
      {
        type: 'credit',
        provider: 'VISA',
        cardNumber: '8765432187654321',
        cardHolder: this.user.fullName,
        expiry: '11/25',
        cvv: '456'
      },
      {
        type: 'credit',
        provider: 'American Express',
        cardNumber: '8765432187658924',
        cardHolder: this.user.fullName,
        expiry: '08/28',
        cvv: '456'
      }
    ];

    expiredCards = [
      {
        type: 'debit',
        provider: 'Rupay',
        cardNumber: '1234567812349524',
        cardHolder: this.user.fullName,
        expiry: '12/24',
        cvv: '123'
      },
      {
        type: 'debit',
        provider: 'VISA',
        cardNumber: '12345678123489631',
        cardHolder: this.user.fullName,
        expiry: '1/23',
        cvv: '123'
      },
    ]
  }

