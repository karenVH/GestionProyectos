import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './core/guards/auth.guard'; 


export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'proyectos', 
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/proyectos/proyectos.module').then(m => m.ProyectosModule)
  },
  {
    path: 'tareas/:proyectoId', 
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/tareas/tareas.module').then(m => m.TareasModule)
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, 
  { path: '**', redirectTo: '/login' } ,
];


