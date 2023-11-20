import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


declare var $: any;

@Component({
  selector: 'app-cuisines',
  templateUrl: './cuisines.component.html',
  styleUrls: ['./cuisines.component.css']
})
export class CuisinesComponent implements AfterViewInit {


  inputValue: string = '';
  data: any[] = [];

  empty(): void {

    this.inputValue = '';
  }
 

  ngAfterViewInit() {
    $(() => {
      $('#exampleModalInCuisines').appendTo('body');
      $('#EditexampleModalInCuisines').appendTo('body');
      $('#myDataTable').DataTable({
        pagingType: 'full_numbers',
        pageLength: 5,
        lengthMenu: [5, 10, 25, 50],
        processing: true,
      });

    });
  }
  ngOnInit() {
    this.data = [
      { SNo: '1', cuisineName: 'Indian', createdAt: '31/07/2021', active: '', action: '' },
      { SNo: '2', cuisineName: 'Chinese', createdAt: '10/10/2022', active: '', action: '' },
      { SNo: '3', cuisineName: 'Italian', createdAt: '09/05/2019', active: '', action: '' },
      { SNo: '4', cuisineName: 'Thai', createdAt: '28/02/2021', active: '', action: '' },
      { SNo: '5', cuisineName: 'Japanese', createdAt: '18/07/2023', active: '', action: '' },
      { SNo: '6', cuisineName: 'French', createdAt: '11/12/2020', active: '', action: '' },
      { SNo: '7', cuisineName: 'Mexican', createdAt: '30/08/2017', active: '', action: '' },
      { SNo: '8', cuisineName: 'American', createdAt: '07/01/2015', active: '', action: '' },
      { SNo: '9', cuisineName: 'Korean', createdAt: '17/05/2022', active: '', action: '' },
      { SNo: '10', cuisineName: 'German', createdAt: '16/04/2022', active: '', action: '' },

    ];
  }
  constructor(private toastr: ToastrService) { }

  add() {
    console.log(this.inputValue);
    if (this.inputValue) {
      this.toastr.success('Cuisine Added', 'Success');
      
      this.empty();
    } else {
      this.toastr.error('Please add the Cuisine.', 'Error');
      
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
