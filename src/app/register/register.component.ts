import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { passwordMatchValidator } from './password';
import { get } from 'jquery';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']

})

export class RegisterComponent {


  RegisterForm!: FormGroup;
  passwordVisible: boolean = true;
  passwordVisible1: boolean = true;
  password: string = '';
  passwordStrength: string = '';
  passwordShow: boolean = false


  ngOnInit(): void {
    this.RegisterForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'resusername': new FormControl(null, [Validators.required]),
      'image': new FormControl(null, [Validators.required, this.imageFileTypeValidator(['png', 'jpg'])]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/)]),
      'cpassword': new FormControl(null, [Validators.required]),
      'countrycode': new FormControl(null, [Validators.required]),
      'phoneNumber': new FormControl(null, [Validators.required, Validators.pattern(/^\d{10}$/)]),
      'address': new FormControl(null, Validators.required),
      'city': new FormControl(null, Validators.required),
      'country': new FormControl(null, Validators.required),
      'selectedOption': new FormControl('', Validators.required),
      'zip': new FormControl(null, [Validators.required, Validators.pattern(/^\d{6}$/)]),

    },
      {
        validators: passwordMatchValidator
      })
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
  
  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
    console.log('Password visibility toggled:', this.passwordVisible);


  }
  togglePasswordVisibility1() {
    this.passwordVisible1 = !this.passwordVisible1;
    console.log('Password visibility toggled:', this.passwordVisible1);


  }
  checkPasswordStrength() {
    const length = this.password.length;
    const hasUpperCase = /[A-Z]/.test(this.password);
    const hasLowerCase = /[a-z]/.test(this.password);
    const hasNumber = /\d/.test(this.password);
    const hasSpecialChar = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/\-="']/g.test(this.password);

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


