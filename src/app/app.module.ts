import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CountUpModule } from 'ngx-countup';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MatDialogModule } from '@angular/material/dialog';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCardModule } from '@angular/material/card';
import { NavbarComponent } from './navbar/navbar.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CuisinesComponent } from './cuisines/cuisines.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DataTablesModule } from 'angular-datatables';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';
import { MealsComponent } from './meals/meals.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { BalancePaymentComponent } from './balance-payment/balance-payment.component';
import { UserPaymentComponent } from './user-payment/user-payment.component';
import { ToastrModule } from 'ngx-toastr';
import { UserPageComponent } from './user-page/user-page.component';
import { AdduserComponent } from './user-page/adduser/adduser.component';
import { EdituserComponent } from './user-page/edituser/edituser.component';
import { ProfileComponent } from './profile/profile.component';
import { ChangePasswordComponent } from './profile/change-password/change-password.component';
import { ViewuserComponent } from './user-page/viewuser/viewuser.component';
import { ReportsComponent } from './reports/reports.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    DashboardComponent,
    CuisinesComponent,
    SidebarComponent,
    MealsComponent,
    SubscriptionComponent,
    BalancePaymentComponent,
    UserPaymentComponent,
    UserPageComponent,
    AdduserComponent,
    EdituserComponent,
    ProfileComponent,
    ChangePasswordComponent,
    ViewuserComponent,
    ReportsComponent,
   
  ],
  imports: [
    BrowserModule,
    MatNativeDateModule,
    MatDatepickerModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatInputModule,
    MatBadgeModule,
    MatCardModule,
    MatMenuModule,
    MatSelectModule,
    MatRadioModule,
    CountUpModule,
    MatDialogModule,
    MatFormFieldModule,
    NgxDatatableModule,
    DataTablesModule,
    MatTabsModule,
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    NgSelectModule,
  
    ToastrModule.forRoot(), 
   

    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
