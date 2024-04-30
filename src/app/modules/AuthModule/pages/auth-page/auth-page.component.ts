import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MessageService } from 'primeng/api';
import { AuthService } from '../../services/auth.service';
import { LoginCredentials } from '../../../../interfaces/interfaces';

@Component({
  selector: 'app-auth-page',
  standalone: true,
  imports: [
    ButtonModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    ToastModule,
  ],
  providers: [MessageService],
  templateUrl: './auth-page.component.html',
  styleUrl: './auth-page.component.css',
})
export class AuthPageComponent {
  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(
    private authService: AuthService,
    private messageService: MessageService,
    private router: Router
  ) {}

  sendCredentials() {
    if (this.loginForm.valid) {
      const credentials: LoginCredentials = {
        username: this.loginForm.value.username,
        email: this.loginForm.value.email,
        password: this.loginForm.value.password,
      };
      this.authService.login({ ...this.loginForm.value }).subscribe(
        (response: any) => {
          this.messageService.add({
            severity: 'succress',
            summary: 'Inicio de sesion exitoso',
            detail: response.token || 'Ocurrió un error inesperado',
          });
          localStorage.setItem('token', response.token);
          this.router.navigate(['/home']);
        },
        (err) => {
          console.error('Error durante el inicio de sesión:', err);
          this.messageService.add({
            severity: 'error',
            summary: 'Error durante el inicio de sesión',
            detail: err.message || 'Ocurrió un error inesperado',
          });
        }
      );
    }
  }
}
