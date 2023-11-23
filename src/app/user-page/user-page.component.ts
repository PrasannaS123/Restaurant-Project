import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { exportToExcel } from './export';
import { ViewService } from './view.service';
import { ActivatedRoute, Router, NavigationEnd, ActivatedRouteSnapshot } from '@angular/router';
import { filter } from 'rxjs/operators';
import { HeadingService } from '../shared/heading.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent {
  pageTitle!: string;



  onAddUserClick() {

    this.headingservice.setShowAddUserBreadcrumb(true);
    this.headingservice.setShowEditUserBreadcrumb(false);

    this.router.navigate(['/user/adduser']);
  }

  onEditUserClick() {
    this.headingservice.setShowEditUserBreadcrumb(true);
    this.headingservice.setShowAddUserBreadcrumb(false);
    this.router.navigate(['/user/edituser']);
  }


  ngOnInit() {
    $(document).ready(function () {

      $('#myDataTable').DataTable({
        responsive: true,
        pagingType: 'full_numbers',
        pageLength: 5,
        lengthMenu: [5, 10, 25, 50],
        processing: true
      });

    });
  }


  public data = [
    {
      SNo: '1', FirstName: 'Prasanna', image: 'https://www.alucoildesign.com/assets/pages/media/profile/profile_user.jpg', LastName: 'Siva', email: 'prasanna@gmail.com', address: '123, 2nd Floor, Narayan Dhuru Street', city: 'Mumbai', plan: '3 months', paid: true
    },
    {
      SNo: '2', FirstName: 'Surya', image: 'https://www.alucoildesign.com/assets/pages/media/profile/profile-img.png', LastName: 'Krishnan', email: 'surya@gmail.com', address: '117, Opp To Mtr Hotel, Lalbagh Main Road', city: 'Bangalore', plan: '6 months', paid: false
    },

    {
      SNo: '3', FirstName: 'Adhi', image: 'https://t3.ftcdn.net/jpg/04/23/59/74/360_F_423597477_AKCjGMtevfCi9XJG0M8jter97kG466y7.jpg', LastName: 'Ram', email: 'adhi@gmail.com', address: ' 401, Diwan Chambers, Behind High Court,',
      city: 'Ahmedabad', plan: '9 months', paid: true
    },

  ];


  exportDataToExcel() {
    const fileName = 'user_data';
    const sheetName = 'Users';

    exportToExcel(this.data, fileName, sheetName);
  }
  constructor(private viewservice: ViewService, private router: Router, private headingservice: HeadingService) {

  }

  viewUserDetails(userData: any) {

    this.headingservice.setShowAddUserBreadcrumb(false);
    this.headingservice.setShowEditUserBreadcrumb(false);
    this.headingservice.setShowViewUserBreadcrumb(true);

    this.viewservice.setSelectedUserData(userData);
    localStorage.setItem('selectedUserData', JSON.stringify(userData));


  }



}
