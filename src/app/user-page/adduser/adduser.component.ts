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
      'image': new FormControl(null, [Validators.required, this.imageFileTypeValidator(['png', 'jpg'])]),
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
  imageFileTypeValidator(allowedTypes: string[]) {
    return (control: FormControl): { [key: string]: any } | null => {
      if (!control.value) {
        return null;
      }
      const fileExtension = control.value.split('.').pop().toLowerCase();
      if (allowedTypes.indexOf(fileExtension) === -1) {
        return { 'imageType': true };
      }

      return null;
    };
  }
  
}
