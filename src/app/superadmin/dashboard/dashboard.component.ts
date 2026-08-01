import { SidebarService } from '../../services/sidebar.service';
import { RouterModule } from '@angular/router';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  sidebarService = inject(SidebarService);

  lastRefreshed = 'Just now';
  isRefreshing = false;

  refreshMetrics() {
    this.isRefreshing = true;
    this.lastRefreshed = 'Refreshing...';
    setTimeout(() => {
      this.isRefreshing = false;
      this.lastRefreshed = 'Just now';
    }, 1500);
  }
}
