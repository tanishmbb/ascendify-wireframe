import { SidebarService } from '../../services/sidebar.service';
import { RouterModule } from '@angular/router';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-finance',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './finance.component.html',
  styleUrl: './finance.component.css'
})
export class FinanceComponent {
  sidebarService = inject(SidebarService);

  isOverrideConfirmOpen = false;
  isPaid = false;
  overrideReason = '';

  markAsPaid(invoiceId: string) {
    this.isOverrideConfirmOpen = true;
  }

  confirmOverride() {
    this.isPaid = true;
    this.isOverrideConfirmOpen = false;
  }

  cancelOverride() {
    this.isOverrideConfirmOpen = false;
    this.overrideReason = '';
  }
}
