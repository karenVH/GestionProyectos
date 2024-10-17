import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ListaProyectosComponent } from './lista-proyectos/lista-proyectos.component';
import { HttpClientModule } from '@angular/common/http';
import { ModalCreateComponent } from '../../shared/components/modal-create/modal-create.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';

const routes = [
  { path: '', component: ListaProyectosComponent }
];

@NgModule({
  declarations: [
    ModalCreateComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule
  ]
})
export class ProyectosModule { }
