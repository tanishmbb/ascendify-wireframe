import { SidebarService } from '../../services/sidebar.service';
import { RouterModule } from '@angular/router';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-fraud',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './fraud.component.html',
  styleUrl: './fraud.component.css'
})
export class FraudComponent {
  sidebarService = inject(SidebarService);

  activeFilter = 'all';
  filters = ['All (12)', 'Cert Duplication', 'XP Farming'];
  searchQuery = '';
  resolvedIncidents = new Set<number>();

  // XP adjustment form
  adjustmentAmount = -450;
  adjustmentReason = 'Reversal of illegitimate quiz submissions detected by rate limiter.';

  selectFilter(filter: string) {
    this.activeFilter = filter;
  }

  rejectCertificate(incidentId: number) {
    this.resolvedIncidents.add(incidentId);
  }

  dismissFalsePositive(incidentId: number) {
    this.resolvedIncidents.add(incidentId);
  }

  banUser(incidentId: number) {
    this.resolvedIncidents.add(incidentId);
  }

  searchUser() {
    // Mock: would search by email/ID
    console.log('Searching:', this.searchQuery);
  }

  applyXpAdjustment() {
    console.log('Applied XP adjustment:', this.adjustmentAmount, this.adjustmentReason);
  }
}
