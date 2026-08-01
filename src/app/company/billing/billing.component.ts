import { SidebarService } from '../../services/sidebar.service';
import { RouterModule } from '@angular/router';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-billing',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './billing.component.html',
  styleUrl: './billing.component.css'
})
export class BillingComponent {
  sidebarService = inject(SidebarService);

  isUpgradeModalOpen = false;
  isCancelConfirmOpen = false;
  isBuyCreditsOpen = false;
  isManageTeamOpen = false;

  toggleUpgradeModal() {
    this.isUpgradeModalOpen = !this.isUpgradeModalOpen;
  }

  toggleCancelConfirm() {
    this.isCancelConfirmOpen = !this.isCancelConfirmOpen;
  }

  buyCredits() {
    this.isBuyCreditsOpen = true;
  }

  manageTeam() {
    this.isManageTeamOpen = true;
  }

  downloadInvoice(invoiceId: string) {
    // Mock: would trigger PDF download
    console.log('Downloading invoice:', invoiceId);
  }
}
