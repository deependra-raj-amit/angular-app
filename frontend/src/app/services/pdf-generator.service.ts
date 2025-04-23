import { style } from '@angular/animations';
import { Injectable } from '@angular/core';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

(pdfMake as any).vfs = pdfFonts;

@Injectable({
  providedIn: 'root'
})
export class PdfGeneratorService {

  
  generateTransactionPdf(transactions: any[], userName: string, accountNumber: string, availableBalance: string): void {
    const docDefinition: any = {
      content: [
          {
            image: 'data:image/png;base64,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',
            width: 70, 
            height: 70, 
            absolutePosition: { x: 450, y: 20 } 
          },
        {text: `SafeBank Transaction Report`, style: 'header'},
        { text: `Name: ${userName}
          Account Number:${accountNumber}
          Available Balance: ${availableBalance}
          `, style: 'text' },
        {
          table: {
            headerRows: 1,
            widths: ['*', '*', '*', '*', '*'],
            body: [
              [
                { text: 'Date', style: 'tableHeader' },
                { text: 'Description', style: 'tableHeader' },
                { text: 'Amount', style: 'tableHeader' },
                { text: 'Type', style: 'tableHeader' },
                { text: 'Balance', style: 'tableHeader' }
              ],
              ...transactions.map(txn => [
                this.formatDate(txn.date),
                txn.description,
                this.formatAmount(txn.amount),
                txn.type,
                this.formatAmount(txn.balance)
              ])
            ]
          }
        }
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          margin: [0, 0, 0, 10],
          color:'rgb(38, 44, 51)',
          },
          tableHeader: {
            bold: true,
            fontSize: 12,
            color: 'white',
            fillColor: '#0059b3'
          }
      }
    };
    
    //pdfMake.createPdf(docDefinition).download(`Transactions_${userName}_${accountNumber}.pdf`);
    pdfMake.createPdf(docDefinition).open();
    
  }

  formatDate(date: any): string {
    return new Date(date).toLocaleDateString('en-IN');
  }

  formatAmount(amount: any): string {
    return (amount).toLocaleString('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 2,
    });
  } 
}
