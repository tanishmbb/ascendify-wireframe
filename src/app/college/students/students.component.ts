import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent {
  isMassEmailOpen = false;

  toggleMassEmail() {
    this.isMassEmailOpen = !this.isMassEmailOpen;
  }
}
