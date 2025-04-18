import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {
  searchControl = new FormControl('');
  
  transactions = [
    { date: '17-Apr-2025', description: 'ATM Withdrawal', type: 'Debit', amount: '₹5,000.00', balance: '₹2,45,000.00' },
    { date: '16-Apr-2025', description: 'Salary Credit', type: 'Credit', amount: '₹50,000.00', balance: '₹2,50,000.00' },
    { date: '15-Apr-2025', description: 'Electricity Bill', type: 'Debit', amount: '₹1,200.00', balance: '₹2,00,000.00' },
    { date: '14-Apr-2025', description: 'Online Shopping - Amazon', type: 'Debit', amount: '₹3,499.00', balance: '₹2,01,200.00' },
    { date: '13-Apr-2025', description: 'Mobile Recharge', type: 'Debit', amount: '₹299.00', balance: '₹2,04,699.00' },
    { date: '12-Apr-2025', description: 'NEFT from Akash', type: 'Credit', amount: '₹7,000.00', balance: '₹2,05,000.00' },
    { date: '11-Apr-2025', description: 'Dining - Zomato', type: 'Debit', amount: '₹1,850.00', balance: '₹1,98,000.00' },
    { date: '10-Apr-2025', description: 'Credit Card Payment', type: 'Debit', amount: '₹12,000.00', balance: '₹2,10,000.00' },
    { date: '09-Apr-2025', description: 'Interest Credit', type: 'Credit', amount: '₹1,200.00', balance: '₹2,22,000.00' },
    { date: '08-Apr-2025', description: 'Fuel - IndianOil', type: 'Debit', amount: '₹2,300.00', balance: '₹2,20,800.00' }
  ];
  

  filteredTransactions = this.transactions;


  

  ngOnInit(): void {
    this.searchControl.valueChanges.subscribe(searchText => {
      const search = (searchText || '').toLowerCase();
      this.filteredTransactions = this.transactions.filter(txn =>
        txn.description.toLowerCase().includes(search) ||
        txn.type.toLowerCase().includes(search)
      );
    });
  }

  constructor(private userService: UserService){
    this.userService;
  }

  users = this.userService.users;
  userName = this.users.fullName;
  accountNumber = this.users.accountNumber;

}
