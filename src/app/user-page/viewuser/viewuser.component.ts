import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ViewService } from '../view.service';

@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.css']
})
export class ViewuserComponent {
  selectedUserData: any;

  constructor(private userDataService: ViewService , private router: Router) { }

  ngOnInit() {
    this.userDataService.selectedUserData$.subscribe(userData => {
      this.selectedUserData = userData;
      console.log('Selected User Data:', this.selectedUserData);
      this.selectedUserData = this.userDataService.getItem('selectedUserData');
    });
    
  }
  saveDataToLocalStorage() {
    this.userDataService.setItem('selectedUserData', this.selectedUserData);
    
  }

  navigateToParent() {
    this.router.navigate(['/user']);
  }
}
