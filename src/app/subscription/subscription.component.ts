import { Component, ElementRef, Renderer2 } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent {


  inputValue: string = '';
  inputValue1: string = '';
  inputValue2: string = '';
  inputValue3: string = '';

  empty(): void {

    this.inputValue = '';
    this.inputValue1 = '';
    this.inputValue2= '';
    this.inputValue3= '';
  }
  public data = [
    { SNo: '1', subscriptionName: 'Silver Subscription', price: '3999', validity: '89 days',  createdAt: '07/12/2009', active: '', action: '' },
    { SNo: '2', subscriptionName: 'Platinum Subscription', price: '6999', validity: '129 days', createdAt: '26/01/2011', active: '', action: '' },
    { SNo: '3', subscriptionName: 'Gold Subscription', price: '9999', validity: '179 days', createdAt: '11/07/2008', active: '', action: '' },
    
  ];

  ngOnInit() {
    $(document).ready(function () {
      $('#exampleModalInSubscrption').appendTo('body');
      $('#EditexampleModalInSubscription').appendTo('body');
      $('#myDataTable').DataTable({
        pagingType: 'full_numbers',
        pageLength: 5,
        lengthMenu: [5, 10, 25, 50],
        processing: true
      });
    });
  }
  

  constructor(private renderer: Renderer2, private el: ElementRef, private toastr: ToastrService) { }

  add() {
    console.log(this.inputValue1, this.inputValue, this.inputValue2 ,this.inputValue3);
    if (this.inputValue1 && this.inputValue && this.inputValue2 && this.inputValue3) {
      this.toastr.success('Subscription Added', 'Success');
      this.empty();
    } else {
      this.toastr.error('Please add the Subscription.', 'Error');
    }
  }

  edit() {
    console.log(this.inputValue);
    if (this.inputValue) {
      this.toastr.success('Cuisine Edited', 'Success');
      this.empty();
    }
  }
}
