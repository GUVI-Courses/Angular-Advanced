import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  hasUnsavedChanges = false;
  data = new FormControl('', [Validators.required]);

  saveData() {
    this.hasUnsavedChanges = false;
    alert('Data Saved');
  }
}
