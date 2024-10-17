import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NavigationEnd, Router, RouterModule, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterModule, MatSlideToggleModule], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gestion-proyectos';
  showText: boolean = false;

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.checkUrl();
      });
  }

  logout() {
    localStorage.removeItem('isLoggedIn'); 
    this.router.navigate(['/login']);  
  }
  
  checkUrl() {
    const currentUrl = this.router.url;
    this.showText = currentUrl.includes('/proyectos') || currentUrl.includes('/tareas');
  }
}
