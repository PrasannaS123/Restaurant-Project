import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
declare var $: any;

@Component({
  selector: 'app-user-payment',
  templateUrl: './user-payment.component.html',
  styleUrls: ['./user-payment.component.css']
})
export class UserPaymentComponent {

  inputValue: string = '';

  

  empty(): void {
    this.inputValue = '';
  
   
  }

  ngOnInit() {
    $(document).ready(function () {
      $('#exampleModalInPayment').appendTo('body');
      $('#myDataTable').DataTable({
        pagingType: 'full_numbers',
        pageLength: 5,
        lengthMenu: [5, 10, 25, 50],
        processing: true
      });
      $('.selectpicker').selectpicker();
    });
  }
  constructor(private toastr: ToastrService) { }

  
  pay() {
   
    if (this.inputValue) {
      this.toastr.success('Payment successful!', 'Success');
      this.empty(); 
    } else {
      this.toastr.error('Please fill in all fields.', 'Error');
    }
  }
  public data = [
    { SNo: '1', UserName: 'Prasanna', plan: 'Silver',price:'Rs.3999', method: 'Prepaid', paid: true },
    { SNo: '2', UserName: 'Surya', plan: 'Platinum', price: 'RS.6999', method: 'PostPaid', paid: true },
    { SNo: '3', UserName: 'Adhi', plan: 'Gold', price: 'Rs.9999', method: 'Prepaid', paid: true },


  ];

  

}
