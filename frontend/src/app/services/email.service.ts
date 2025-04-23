import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class EmailService {
  constructor(private http: HttpClient) {}

  sendTransactionEmail(user: any, transactions: any[]) {
    return this.http.post('http://localhost:3000/send-email', { user, transactions });
  }
}
