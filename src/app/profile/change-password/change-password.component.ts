import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { passwordMatchValidator } from './password';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {

  RegisterForm!: FormGroup;

  passwordVisible: boolean = true;
  passwordVisible1: boolean = true;
  password: string = '';
  passwordStrength: string = '';
  passwordShow: boolean = false



  ngOnInit(): void {
    this.RegisterForm = new FormGroup({
      'currentPass': new FormControl(null, Validators.required),
      'password': new FormControl(null, [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/)]),
      'cpassword': new FormControl(null, [Validators.required]),
    },
      {
        validators: passwordMatchValidator
      }
    )
  }


  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
    console.log('Password visibility toggled:', this.passwordVisible);


  }
  togglePasswordVisibility1() {
    this.passwordVisible1 = !this.passwordVisible1;
    console.log('Password visibility toggled:', this.passwordVisible1);


  }
  checkPasswordStrength() {
    const passwordControl = this.RegisterForm.get('password');

    if (passwordControl) {
      const passwordValue = passwordControl.value;
      const length = passwordValue.length;
      const hasUpperCase = /[A-Z]/.test(passwordValue);
      const hasLowerCase = /[a-z]/.test(passwordValue);
      const hasNumber = /\d/.test(passwordValue);
      const hasSpecialChar = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/\-="']/g.test(passwordValue);

      let strength = 'Weak';

      if (length >= 8 && hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar) {
        strength = 'Strong';
      } else if (length >= 6) {
        strength = 'Moderate';
      }

      this.passwordStrength = strength;
      this.passwordShow = true;
    }
  }


  constructor(private router: Router, private toastr: ToastrService) { }
  save() {
    if (this.RegisterForm.valid) {

      this.toastr.success('Success', 'Password changed successfully!');
      this.RegisterForm.reset();
     
      this.passwordStrength = '';
      this.passwordShow = false;
    } else {
      this.toastr.error('Error', 'Please check your inputs.');
    }
  }

  navigateToParent() {
    this.router.navigate(['/profile']);
  }



}
