import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent {
  UserProfile!: FormGroup



  ngOnInit(): void {
    this.UserProfile = new FormGroup({
      'fname': new FormControl(null, [Validators.required]),
      'lname': new FormControl(null, [Validators.required]),
      'email': new FormControl(null, [Validators.required, Validators.email],),
      'countrycode': new FormControl(null, [Validators.required]),
      'phoneNumber': new FormControl(null, [Validators.required, Validators.pattern(/^\d{10}$/)]),
      'address': new FormControl(null, Validators.required),
      'city': new FormControl(null, Validators.required),
      'selectedstate': new FormControl('', Validators.required),
      'zip': new FormControl(null, [Validators.required, Validators.pattern(/^\d{6}$/)]),
      'selectedsubs': new FormControl('', Validators.required),
      'selectedpay': new FormControl('', Validators.required),
      'country': new FormControl('', Validators.required),



    });
   
  }

  constructor(private router: Router) { }
  

  navigateToParent() {
    this.router.navigate(['/user']);
  }
}
