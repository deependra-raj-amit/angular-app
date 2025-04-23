import { Component } from '@angular/core';

@Component({
  selector: 'app-pdf-data',
  templateUrl: './pdf-data.component.html',
  styleUrls: ['./pdf-data.component.css']
})
export class PdfDataComponent {
 lcMasterData = {
    header: {
      title: 'Letters of Credit',
      subtitle: 'Standard LC',
      downloadDate: '23/04/2025',
      downloadTime: '10:33:05 AM',
      location: 'New York'
    },
    transactionInfo: {
      companyCRN: 'XXXX',
      portalRef: 'LC25040000133083',
      bankRef: '0958ILF231011738',
      bankName: 'KOTAK MAHINDRA BANK',
      issueDate: '21/11/2023',
      applicationDate: '22/04/2025',
      expiryDate: '21/11/2025',
      placeOfExpiry: 'SINGAPORE',
      lcAmount: 'USD 872,256.28'
    },
    generalDetails: {
      expiryDate: '21/11/2025',
      placeOfExpiry: 'SINGAPORE',
      lcType: 'Import Letter of Credit',
      feature: 'Non Transferable',
      rules: 'UCP LATEST VERSION',
      confirmation: 'Without',
      customerRef: '0958ILF231011738-ISS001'
    },
    applicant: {
      entity: '6500073',
      name: 'Round4 Test Add2',
      address: 'Round 4 Test Add3, Mumbai, Test Swift Comp3'
    },
    beneficiary: {
      name: 'HERAEUS PHOTOVOLTAICS SINGAPORE',
      address: 'PTE. LTD, 9,TUAS AVE 5, SINGAPORE 639335, SG-Singapore'
    },
    bankDetails: {
      issuingBank: {
        name: 'KOTAK MAHINDRA BANK',
        reference: '6500073.ZONE1.0001.0958'
      },
      beneficiaryBank: {
        name: 'DEUTSCHE BANK AG',
        address: 'Singapore Branch, ONE RAFFLES QUAY, SINGAPORE 48583'
      }
    },
    amountDetails: {
      lcAmount: 'USD 872,256.28',
      availableAmount: 'USD 872,256.28',
      outstandingAmount: 'USD 442,107.92',
      issuingBankCharges: 'Applicant',
      outsideCountryCharges: 'Beneficiary'
    },
    paymentDetails: {
      bank: 'KOTAK MAHINDRA BANK LIMITED',
      creditAvailableBy: 'Negotiation',
      paymentAt: 'Calculated Maturity Date',
      maturity: '180 Tenor (Days) After Airway Bill',
      drawee: 'Issuing Bank'
    },
    shipmentDetails: {
      shipmentTo: 'CHENNAI AIRPORT',
      loading: 'ANY AIRPORT IN SINGAPORE',
      discharge: 'ANY PORT IN INDIA',
      lastShipment: '21/11/2023',
      partial: 'Allowed',
      transhipment: 'Allowed',
      incoterms: 'OTHER',
      purchaseTerms: 'CIP - Carriage and Insurance Paid'
    }  
 }
}
    