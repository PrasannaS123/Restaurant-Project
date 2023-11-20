import { Component} from '@angular/core';
import { ToastrService } from 'ngx-toastr';




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
    { SNo: '1',cuisineType: 'Indian', mealName: 'Fried chicken', createdAt: '07/12/2009', active: '', action: '' },
    { SNo: '2', cuisineType: 'Chinese', mealName: 'Salad', createdAt: '26/01/2011', active: '', action: '' },
    { SNo: '3', cuisineType: 'Italian', mealName: 'Fish and chips', createdAt: '11/07/2008', active: '', action: '' },
    { SNo: '4', cuisineType: 'Thai', mealName: 'Pizza', createdAt: '17/08/2013', active: '', action: '' },
    { SNo: '5', cuisineType: 'Japanese', mealName: 'Burger', createdAt: '30/09/2014', active: '', action: '' },
    { SNo: '6', cuisineType: 'French', mealName: 'Fries', createdAt: '05/12/2006', active: '', action: '' },
    { SNo: '7', cuisineType: 'Mexican', mealName: 'Apple pie', createdAt: '21/09/2016', active: '', action: '' },
    { SNo: '8', cuisineType: 'American', mealName: 'Kebab', createdAt: '01/01/2011', active: '', action: '' },
    { SNo: '9', cuisineType: 'Korean', mealName: 'Pork pie', createdAt: '22/06/2009', active: '', action: '' },
    { SNo: '10', cuisineType: 'German', mealName: 'Sunday roast', createdAt: '31/04/2019', active: '', action: '' },

  ];



  ngOnInit() {
   
    $(document).ready(function () {
      $('#exampleModalInMeals').appendTo('body');
      $('#EditexampleModalInMeals').appendTo('body');
      
      $('#myDataTable').DataTable({
        pagingType: 'full_numbers',
        pageLength: 5,
        lengthMenu: [5, 10, 25, 50],
        processing: true
      });
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
      this.empty();
    }
  }

}

