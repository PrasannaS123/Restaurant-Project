import { Component } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  mobEmail: string = '';
  password: string = "";
  loginSuccess = false;

  onSubmit() {
    this.loginSuccess = true;
  }

}

