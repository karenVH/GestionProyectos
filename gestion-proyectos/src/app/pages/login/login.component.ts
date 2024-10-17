import { Component } from '@angular/core';
import { AuthService } from '../../core/service/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username = '';
  password = '';
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    if (this.authService.login(this.username, this.password)) {
      console.log('auth tru y va redirigiendo')
      this.router.navigate(['/proyectos']); // Redirige a la página de proyectos al iniciar sesión correctamente
    } else {
      this.errorMessage = 'Credenciales incorrectas'; // Muestra un mensaje de error si el login falla
    }
  }
}
