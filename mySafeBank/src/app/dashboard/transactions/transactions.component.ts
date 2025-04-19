import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { TransactionService, CustomTransaction } from '../../services/transaction.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {
  searchControl = new FormControl('');
  transactions: CustomTransaction[] = [];



  filteredTransactions: CustomTransaction[] = [];

  users = this.userService.users;
  userName = this.users.fullName;
  accountNumber = this.users.accountNumber;

  constructor(
    private userService: UserService,
    private transactionService: TransactionService
  ) {}

  ngOnInit(): void {
    this.transactions = [...this.transactions];
    this.filteredTransactions = [...this.transactions];

    this.transactionService.transactions$.subscribe((newTxList) => {
      this.transactions = [...newTxList, ...this.transactions];
      this.applySearch(this.searchControl.value || '');
    });

    this.searchControl.valueChanges.subscribe(searchText => {
      this.applySearch(searchText || '');
    });
  }

  private applySearch(search: string) {
    const keyword = search.toLowerCase();
    this.filteredTransactions = this.transactions.filter(tx =>
      tx.description.toLowerCase().includes(keyword) ||
      tx.type.toLowerCase().includes(keyword)
    );
  }
}
