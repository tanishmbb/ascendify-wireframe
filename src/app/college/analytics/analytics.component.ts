import { SidebarService } from '../../services/sidebar.service';
import { RouterModule } from '@angular/router';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-analytics',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './analytics.component.html',
  styleUrl: './analytics.component.css'
})
export class AnalyticsComponent {
  sidebarService = inject(SidebarService);

  selectedBranch = 'all';
  isExporting = false;

  exportReport() {
    this.isExporting = true;
    setTimeout(() => this.isExporting = false, 2000);
  }
}
