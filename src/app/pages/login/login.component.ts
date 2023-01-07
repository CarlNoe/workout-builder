import { Component } from '@angular/core';
import { FireauthService } from 'src/app/shared/services/firebase/fireauth.service';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  loginForm: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  onLogin() {
    if (this.loginForm.valid) {
      this.fireauth.login(
        this.loginForm.value.email,
        this.loginForm.value.password
      );
    } else {
      alert('Please fill the form with valid informations');
    }
  }

  constructor(
    private fireauth: FireauthService,
    private formBuilder: FormBuilder
  ) {}
}
