import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserDetailsComponent } from './dashboard/user-details/user-details.component';
import { AccountSummaryComponent } from './dashboard/account-summary/account-summary.component';
import { FundTransferComponent } from './dashboard/fund-transfer/fund-transfer.component';
import { BillPaymentsComponent } from './dashboard/bill-payments/bill-payments.component';
import { SavingsInvestmentsComponent } from './dashboard/savings-investments/savings-investments.component';
import { LoansCreditsComponent } from './dashboard/loans-credits/loans-credits.component';
import { UpiComponent } from './dashboard/upi/upi.component';
import { InsuranceComponent } from './dashboard/insurance/insurance.component';
import { CardsComponent } from './dashboard/cards/cards.component';
import { TransactionsComponent } from './dashboard/transactions/transactions.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    ForgetPasswordComponent,
    NavbarComponent,
    DashboardComponent,
    UserDetailsComponent,
    AccountSummaryComponent,
    FundTransferComponent,
    BillPaymentsComponent,
    SavingsInvestmentsComponent,
    LoansCreditsComponent,
    UpiComponent,
    InsuranceComponent,
    CardsComponent,
    TransactionsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [LoginComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
