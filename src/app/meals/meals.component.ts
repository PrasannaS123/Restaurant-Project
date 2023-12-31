import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


declare var $: any;

@Component({

  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.css'],

})
export class MealsComponent {
 
 

  inputValue: string = '';



  empty(): void {
    this.inputValue = '';
    
    
  }
  public data = [
    { SNo: '1', cuisineType: 'Punjabi Cuisine', mealName: 'Masala dosa', createdAt: '07/12/2009', active: '', action: '' },
    { SNo: '2', cuisineType: 'Rajasthani Cuisine', mealName: 'Butter Chicken.', createdAt: '26/01/2011', active: '', action: '' },
    { SNo: '3', cuisineType: 'Bengali Cuisine', mealName: 'Vada Pav', createdAt: '11/07/2008', active: '', action: '' },
    { SNo: '4', cuisineType: 'North Indian Cuisine', mealName: 'Dal Makhani', createdAt: '17/08/2013', active: '', action: '' },
    { SNo: '5', cuisineType: 'Sichuan', mealName: 'Kung Pao Chicken', createdAt: '30/09/2014', active: '', action: '' },
    { SNo: '6', cuisineType: 'Shandong', mealName: 'Sweet and Sour Pork', createdAt: '05/12/2006', active: '', action: '' },
    { SNo: '7', cuisineType: 'Cantonese', mealName: 'Peking Roast Duck', createdAt: '21/09/2016', active: '', action: '' },
    { SNo: '8', cuisineType: 'Cajun cuisine', mealName: 'Cheeseburger', createdAt: '01/01/2011', active: '', action: '' },
    { SNo: '9', cuisineType: 'Floribbean cuisine', mealName: 'Chicago-style pizza', createdAt: '22/06/2009', active: '', action: '' },
    { SNo: '10', cuisineType: 'Tex-Mex cuisine', mealName: ' Italian beef', createdAt: '31/04/2019', active: '', action: '' },

  ];



  ngOnInit() {

    $(document).ready(function () {
      $('#exampleModalInMeals').appendTo('body');
      $('#EditexampleModalInMeals').appendTo('body');
      $('.selectpicker').selectpicker();
  

      $('#myDataTable').DataTable({
        pagingType: 'full_numbers',
        pageLength: 5,
        lengthMenu: [5, 10, 25, 50],
        processing: true
      });

     ;
    });


  }


  constructor(private toastr: ToastrService) { }
  add() {
    console.log(this.inputValue);
    if (this.inputValue) {

      this.toastr.success('Meal Added', 'Success');
     
      this.empty();


    } else {
      this.toastr.error('Please add the Meal.', 'Error');
    }
  }

  edit() {
    console.log(this.inputValue);
    if (this.inputValue) {
      this.toastr.success('Cuisine Edited', 'Success');
    
    }
  }

 
}

