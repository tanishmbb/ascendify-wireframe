import { SidebarService } from '../../services/sidebar.service';
import { RouterModule } from '@angular/router';
import { Component , inject } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent {
  sidebarService = inject(SidebarService);

  isMassEmailOpen = false;

  toggleMassEmail() {
    this.isMassEmailOpen = !this.isMassEmailOpen;
  }
}
