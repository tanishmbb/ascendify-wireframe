import { SidebarService } from '../../services/sidebar.service';
import { RouterModule } from '@angular/router';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  sidebarService = inject(SidebarService);

  selectedQuarter = 'Q3 2026';
  isDownloading = false;

  downloadReport() {
    this.isDownloading = true;
    setTimeout(() => this.isDownloading = false, 2000);
  }
}
