import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

import { RegisterComponent } from './register/register.component';

import { CuisinesComponent } from './cuisines/cuisines.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MealsComponent } from './meals/meals.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { BalancePaymentComponent } from './balance-payment/balance-payment.component';
import { UserPaymentComponent } from './user-payment/user-payment.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserPageComponent } from './user-page/user-page.component';
import { AdduserComponent } from './user-page/adduser/adduser.component';
import { EdituserComponent } from './user-page/edituser/edituser.component';
import { ProfileComponent } from './profile/profile.component';
import { ChangePasswordComponent } from './profile/change-password/change-password.component';
import { ViewuserComponent } from './user-page/viewuser/viewuser.component';
import { ReportsComponent } from './reports/reports.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: '',
    component: NavbarComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent},
      { path: 'cuisines', component: CuisinesComponent, data: { title: ' List' } },
      { path: 'meals', component: MealsComponent, data: { title: ' List' } },
      { path: 'subscription', component: SubscriptionComponent, data: { title: ' List' } },
      { path: 'balancePayment', component: BalancePaymentComponent, data: { title: ' List' } },
      { path: 'userPayment', component: UserPaymentComponent, data: { title: ' List' } },
      { path: 'user', component: UserPageComponent, data: { title: ' List' } },
      { path: 'profile', component: ProfileComponent },

      { path: 'reports', component: ReportsComponent, data: { title: ' List' } },
      { path: 'profile/changePassword', component: ChangePasswordComponent },
      { path: 'user/adduser', component: AdduserComponent, data: { title: ' List' } },
      { path: 'user/edituser', component: EdituserComponent, data: { title: ' List' } },
      { path: 'user/viewuser/:id', component: ViewuserComponent, data: { title: ' List' } },
    ],
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
