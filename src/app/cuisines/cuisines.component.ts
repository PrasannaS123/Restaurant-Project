import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
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
      { SNo: '1', cuisineName: 'Punjabi Cuisine', createdAt: '31/07/2021', active: '', action: '' },
      { SNo: '2', cuisineName: 'Rajasthani Cuisine', createdAt: '10/10/2022', active: '', action: '' },
      { SNo: '3', cuisineName: 'Bengali Cuisine', createdAt: '09/05/2019', active: '', action: '' },
      { SNo: '4', cuisineName: 'North Indian Cuisine', createdAt: '28/02/2021', active: '', action: '' },
      { SNo: '5', cuisineName: 'Sichuan', createdAt: '18/07/2023', active: '', action: '' },
      { SNo: '6', cuisineName: 'Shandong', createdAt: '11/12/2020', active: '', action: '' },
      { SNo: '7', cuisineName: 'Cantonese', createdAt: '30/08/2017', active: '', action: '' },
      { SNo: '8', cuisineName: 'Cajun cuisine', createdAt: '07/01/2015', active: '', action: '' },
      { SNo: '9', cuisineName: 'Floribbean cuisine', createdAt: '17/05/2022', active: '', action: '' },
      { SNo: '10', cuisineName: 'Tex-Mex cuisine', createdAt: '16/04/2022', active: '', action: '' },

    ];
  }
  constructor(private toastr: ToastrService, private renderer: Renderer2) { }

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
