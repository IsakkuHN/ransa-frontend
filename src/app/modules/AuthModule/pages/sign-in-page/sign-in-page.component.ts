import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';

@Component({
  selector: 'app-sign-in-page',
  standalone: true,
  imports: [
    ButtonModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    PasswordModule,
  ],
  templateUrl: './sign-in-page.component.html',
  styleUrl: './sign-in-page.component.css',
})
export class SignInPageComponent {
  signinForm = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

  printForm() {
    console.log(this.signinForm.value);
  }
}
