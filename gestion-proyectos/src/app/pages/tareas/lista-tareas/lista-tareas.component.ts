import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { ConfimarcionModalComponent } from '../../../shared/components/confimarcion-modal/confimarcion-modal.component';

@Component({
  selector: 'app-lista-tareas',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    HttpClientModule
  ],
  templateUrl: './lista-tareas.component.html',
  styleUrl: './lista-tareas.component.css'
})
export class ListaTareasComponent implements OnInit{
  tareas: any[] = [];
  proyectoId: any ;
  nuevaTarea: any = {
    title: '',
    completed: false
  };
  

  constructor(
    private route: ActivatedRoute,
     private dialog: MatDialog, 
     private http: HttpClient) { }

  ngOnInit(): void {
    this.loadTareas() 
  }

/*Funcion Para listar las tareas */
  loadTareas() {
    this.proyectoId = this.route.snapshot.paramMap.get('proyectoId');
    this.http.get<any[]>(`https://jsonplaceholder.typicode.com/todos?userId=${this.proyectoId}`)
      .subscribe(data => {
        this.tareas = data.map(task => ({
          id: task.id,
          title: task.title,
          completed: task.completed
        }));
      });
  }
  
  /*Funcion para eliminar una tarea  */

  eliminarTarea(tareaId: number): void {
    this.http.delete(`https://jsonplaceholder.typicode.com/todos/${tareaId}`)
      .subscribe({
        next: () => {
          this.tareas = this.tareas.filter(tarea => tarea.id !== tareaId);
          console.log('Tarea con id ${tareaId} eliminada correctamente');
          this.dialog.open(ConfimarcionModalComponent, {
            width: '300px',
            height: '200px', 
            panelClass: 'custom-modal'
          });
        },
        error: (err) => {
          console.error('Error al eliminar la tarea', err);
        }
      });
  }

/* Funcion para editar la tarea */
  editarTarea(tareaId: number): void {
    const nuevaTarea = {
      title: 'Tarea editada',
      completed: true
    };

    this.http.put(`https://jsonplaceholder.typicode.com/todos/${tareaId}`, nuevaTarea)
      .subscribe({
        next: (response) => {
          const index = this.tareas.findIndex(tarea => tarea.id === tareaId);
          if (index !== -1) {
            this.tareas[index] = { ...this.tareas[index], ...nuevaTarea };
          }
          console.log(`Tarea con id ${tareaId} editada correctamente`, response);
        },
        error: (err) => {
          console.error('Error al editar la tarea', err);
        }
      });
  }

}
