import { Component, ElementRef, ViewChild } from '@angular/core';
import { exportToExcel } from '../user-page/export';
import { DateRangePicker } from '@syncfusion/ej2-calendars';
import { FormGroup, FormControl } from '@angular/forms';


declare var $: any;


@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent {


  inputValue: string = '';
  data: any[] = [];

  empty(): void {

    this.inputValue = '';
  }


  ngAfterViewInit() {


    $(() => {

      $('#exampleModalInReports').appendTo('body');
   
      

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
      { SNo: '1', reporttype: 'Report Type 1', reportname: 'Report Name 1', size: '5 MB', generatedat: '31/09/2022', action: '' },
      { SNo: '2', reporttype: 'Report Type 2', reportname: 'Report Name 2', size: '8 MB', generatedat: '14/10/2020', action: '' },
      { SNo: '3', reporttype: 'Report Type 3', reportname: 'Report Name 3', size: '2 MB', generatedat: '08/01/2023', action: '' },
      { SNo: '4', reporttype: 'Report Type 4', reportname: 'Report Name 4', size: '13 MB', generatedat: '27/05/2019', action: '' },
      { SNo: '5', reporttype: 'Report Type 5', reportname: 'Report Name 5', size: '6 MB', generatedat: '02/06/2023', action: '' },


    ];

 
}

exportDataToExcel() {
  const fileName = 'user_data';
  const sheetName = 'Users';

  exportToExcel(this.data, fileName, sheetName);
}

  dateRange = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });
}



