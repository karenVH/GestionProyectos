import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-create',
  templateUrl: './modal-create.component.html',
  styleUrl: './modal-create.component.css'
})
export class ModalCreateComponent {
  projectForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ModalCreateComponent>,
    private http: HttpClient
  ) {
    this.projectForm = this.fb.group({
      title: ['', Validators.required],  
      description: ['', [Validators.required, Validators.minLength(10)]],  
    });
  }


  submitForm() {
    if (this.projectForm.valid) {
      const formData = this.projectForm.value;
      this.http.post('https://jsonplaceholder.typicode.com/users', formData).subscribe(response => {
        console.log('Project created successfully:', response);
        this.dialogRef.close();  
      });
    } else {
      this.projectForm.markAllAsTouched();
    }
  }

  close() {
    this.dialogRef.close(); 
  }
}
