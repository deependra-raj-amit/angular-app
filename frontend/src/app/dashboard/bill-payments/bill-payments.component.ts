import { Component } from '@angular/core';

@Component({
  selector: 'app-bill-payments',
  templateUrl: './bill-payments.component.html',
  styleUrls: ['./bill-payments.component.css']
})
export class BillPaymentsComponent {
  billTypes = [
    { type: 'electricity', label: 'Electricity', icon: 'fas fa-bolt' },
    { type: 'water', label: 'Water', icon: 'fas fa-tint' },
    { type: 'internet', label: 'Internet', icon: 'fas fa-wifi' },
    { type: 'gas', label: 'Gas', icon: 'fas fa-fire' },
    { type: 'mobile', label: 'Mobile Recharge', icon: 'fas fa-mobile-alt' },
    { type: 'dth', label: 'DTH', icon: 'fas fa-tv' },
    { type: 'insurance', label: 'Insurance', icon: 'fas fa-shield-alt' },
    { type: 'loan', label: 'Loan Repayment', icon: 'fas fa-university' },
    { type: 'creditcard', label: 'Credit Card', icon: 'fas fa-credit-card' },
    { type: 'fastag', label: 'FASTag Recharge', icon: 'fas fa-road' },
    { type: 'metro', label: 'Metro Recharge', icon: 'fas fa-train-subway' },
    { type: 'education', label: 'Education Fees', icon: 'fas fa-graduation-cap' },
  ];
  
  
  selectBill(bill: any) {
    console.log('Selected bill type:', bill.type);
    // Later you can navigate or show a form based on selection
  }
  
}
