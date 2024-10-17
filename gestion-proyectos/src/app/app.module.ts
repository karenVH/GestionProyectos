import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthGuard } from './core/guards/auth.guard';
import { AuthService } from './core/service/auth.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProyectosModule } from './pages/proyectos/proyectos.module';
import { TareasModule } from './pages/tareas/tareas.module';
import { RouterModule } from '@angular/router';
import {routes} from './app.routes';
import { ModalCreateComponent } from './shared/components/modal-create/modal-create.component';
import { ConfimarcionModalComponent } from './shared/components/confimarcion-modal/confimarcion-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [
    AppComponent, 
    LoginComponent, 
    ProyectosModule,
    ModalCreateComponent,
    TareasModule,
    ConfimarcionModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClient,
    CommonModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatInputModule,
    MatInputModule,
    HttpClientModule
  ],
  providers: [AuthGuard, AuthService]
})
export class AppModule { }
