import { SidebarService } from '../../services/sidebar.service';
import { RouterModule } from '@angular/router';
import { Component , inject } from '@angular/core';

@Component({
  selector: 'app-bootcamps',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './bootcamps.component.html',
  styleUrl: './bootcamps.component.css'
})
export class BootcampsComponent {
  sidebarService = inject(SidebarService);

  isScheduleModalOpen = false;
  isGenerating = false;

  scheduleEvaluation() {
    this.isScheduleModalOpen = true;
  }

  closeScheduleModal() {
    this.isScheduleModalOpen = false;
  }

  managePanels() {
    // Logic to manage panels
  }

  generateRoster() {
    this.isGenerating = true;
    setTimeout(() => this.isGenerating = false, 1500);
  }
}
