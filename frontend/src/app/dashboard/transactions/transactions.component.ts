import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TransactionService, CustomTransaction } from '../../services/transaction.service';
import { PdfGeneratorService } from '../../services/pdf-generator.service'
import { EmailService } from '../../services/email.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {
  searchControl = new FormControl('');
  transactions: CustomTransaction[] = [];
  filteredTransactions: CustomTransaction[] = [];

  userName: string = '';
  accountNumber: string = '';
  availableBalance: string = '';

  constructor(
    private transactionService: TransactionService, 
    private pdfService: PdfGeneratorService, 
    private emailService: EmailService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser') || '{}');

    if (loggedInUser) {
      this.userName = loggedInUser.fullName;
      this.accountNumber = loggedInUser.accountNumber;
      this.availableBalance = `₹${(loggedInUser.balance || 0).toLocaleString('en-IN')}.00`;
    }

    this.transactionService.transactions$.subscribe((newTxList) => {
      this.transactions = [...newTxList];
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
  downloadPdf() {
    this.pdfService.generateTransactionPdf(this.transactions,this.userName, this.accountNumber, this.availableBalance);
  }

  users = this.userService.users;
  //userName = this.users.fullName;
  userEmail = this.users.email;

  sendEmailReport() {
    const user = {
      name: this.userName,
      email: this.users.email
    };
  
    this.emailService.sendTransactionEmail(user, this.transactions).subscribe({
      next: (res) => alert('Email sent successfully!'),
      error: (err) => alert('Failed to send email: ' + err.message)
    });
  }
  

}
