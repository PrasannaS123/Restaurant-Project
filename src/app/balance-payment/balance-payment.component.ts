import { Component } from '@angular/core';

@Component({
  selector: 'app-balance-payment',
  templateUrl: './balance-payment.component.html',
  styleUrls: ['./balance-payment.component.css']
})
export class BalancePaymentComponent {
  constructor() {

  }
  inputValue: string = '';
  paid: boolean | undefined;

  empty(): void {

    this.inputValue = '';
  }
  public data = [
    { SNo: '1', UserName: 'Prasanna', plan: '3999', method: 'Prepaid', method1: 'PostPaid', paid: false},
    { SNo: '2', UserName: 'Surya', plan: '6999', method: 'Prepaid', method1: 'PostPaid', paid: false },
    { SNo: '3', UserName: 'Adhi', plan: '9999', method: 'Prepaid', method1: 'PostPaid', paid: false },


  ];

  ngOnInit() {
    $(document).ready(function () {
      $('#myDataTable').DataTable({
       
        pagingType: 'full_numbers',
        pageLength: 5,
        lengthMenu: [5, 10, 25, 50],
        processing: true
      });
    });


  }
}
