import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { ModalCreateComponent } from '../../../shared/components/modal-create/modal-create.component';
import { ConfimarcionModalComponent } from '../../../shared/components/confimarcion-modal/confimarcion-modal.component';



export interface Proyecto {
  id: number;
  title: string;
  description: string;
}


@Component({
  selector: 'app-lista-proyectos',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule
  ],
  templateUrl: './lista-proyectos.component.html',
  styleUrl: './lista-proyectos.component.css'
})
export class ListaProyectosComponent implements OnInit {
  proyectos: any[] = [];

  constructor(private http: HttpClient, private router: Router, private dialog: MatDialog) { }

  logout() {
    localStorage.removeItem('isLoggedIn'); 
    this.router.navigate(['/login']);  
  }
  
  ngOnInit(): void {
    this.loadProjects();
  }

  //Funcion para Listar proyectos
  loadProjects() {
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe({
        next: (data) => {
          this.proyectos = data.map(user => ({
            id: user.id,
            title: user.name,
            description: user.company?.catchPhrase 
          }));
        },
        error: (err) => {
          console.error('Error al listar los datos', err);
        }
      });
  }

 
  openCreateProjectModal() {
    const dialogRef = this.dialog.open(ModalCreateComponent, {
      width: '600px',
      height: 'auto',  
      panelClass: 'custom-modal' 
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.proyectos.push(result);
      }
      console.log('Modal closed');
    });
  }

  /*Funcion para eliminar un proyecto */
  deleteProject(proyectoId: number) {
    this.http.delete(`https://jsonplaceholder.typicode.com/users/${proyectoId}`)
      .subscribe({
        next: () => {
          this.proyectos = this.proyectos.filter(project => project.id !== proyectoId);
          console.log(`Proyecto con id ${proyectoId} eliminado correctamente`);
        this.dialog.open(ConfimarcionModalComponent, {
          width: '300px', 
          height: '200px', 
          panelClass: 'custom-modal' 
        });
        },
        error: (err) => {
          console.error('Error al eliminar el proyecto', err);
        }
      });
  }

   // funcion para editar proyecto
   editProject(updatedProyecto: Proyecto) {
    this.http.patch(`https://jsonplaceholder.typicode.com/users/${updatedProyecto.id}`, updatedProyecto)
      .subscribe({
        next: (response: any) => {
          const index = this.proyectos.findIndex(project => project.id === updatedProyecto.id);
          if (index !== -1) {
            this.proyectos[index] = response; 
          }
          console.log('Proyecto editado correctamente', response);
        },
        error: (err) => {
          console.error('Error al editar el proyecto', err);
        }
      });
  }

}
