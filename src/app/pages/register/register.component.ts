import { Component } from '@angular/core';
import { FireauthService } from 'src/app/shared/services/firebase/fireauth.service';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  registerForm: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  onRegister() {
    if (this.registerForm.valid) {
      this.fireauth.register(
        this.registerForm.value.email,
        this.registerForm.value.password
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
