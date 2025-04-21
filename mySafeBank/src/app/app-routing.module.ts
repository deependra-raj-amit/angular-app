import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { DashboardComponent} from './dashboard/dashboard.component';
import { AccountSummaryComponent } from './dashboard/account-summary/account-summary.component';
import { CardsComponent } from './dashboard/cards/cards.component';
import { FundTransferComponent } from './dashboard/fund-transfer/fund-transfer.component';
import { BillPaymentsComponent } from './dashboard/bill-payments/bill-payments.component';
import { LoansCreditsComponent } from './dashboard/loans-credits/loans-credits.component';
import { SavingsInvestmentsComponent } from './dashboard/savings-investments/savings-investments.component';
import { UpiComponent } from './dashboard/upi/upi.component';
import { InsuranceComponent } from './dashboard/insurance/insurance.component';
import { TransactionsComponent } from './dashboard/transactions/transactions.component';
import { UserDetailsComponent } from './dashboard/user-details/user-details.component';
import { DepositComponent } from './deposit/deposit.component'
//import { AuthGaurd } from './auth.guard';

const routes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },  
  { path: 'forget-password', component: ForgetPasswordComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'account-summary', component: AccountSummaryComponent },
  { path: 'cards', component: CardsComponent },
  { path: 'fund-transfer', component: FundTransferComponent },
  { path: 'bills', component: BillPaymentsComponent },
  { path: 'loans', component: LoansCreditsComponent }, 
  { path: 'investments', component: SavingsInvestmentsComponent },
  { path: 'upi', component: UpiComponent },
  { path: 'insurance', component: InsuranceComponent },
  { path: 'transactions', component: TransactionsComponent },
  { path: 'user-profile', component: UserDetailsComponent },
  { path: 'deposit', component: DepositComponent }, 

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
