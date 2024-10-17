import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaProyectosComponent } from './lista-proyectos/lista-proyectos.component';

const routes: Routes = [
  { path: '', component: ListaProyectosComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProyectosRoutingModule { }
