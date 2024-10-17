import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confimarcion-modal',
  standalone: true,
  imports: [],
  templateUrl: './confimarcion-modal.component.html',
  styleUrl: './confimarcion-modal.component.css'
})
export class ConfimarcionModalComponent {
  constructor(public dialogRef: MatDialogRef<ConfimarcionModalComponent>) {}

  close(): void {
    this.dialogRef.close();
  }
}
