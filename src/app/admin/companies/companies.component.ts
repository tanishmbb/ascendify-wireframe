import { SidebarService } from '../../services/sidebar.service';
import { RouterModule } from '@angular/router';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-companies',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './companies.component.html',
  styleUrl: './companies.component.css'
})
export class CompaniesComponent {
  sidebarService = inject(SidebarService);

  searchQuery = '';
  statusFilter = 'pending';
  isVerifyModalOpen = false;
  selectedCompanyId = '';

  verifyKyc(companyId: string) {
    this.selectedCompanyId = companyId;
    this.isVerifyModalOpen = true;
  }

  closeVerifyModal() {
    this.isVerifyModalOpen = false;
  }

  approveCompany() {
    this.isVerifyModalOpen = false;
  }

  rejectCompany() {
    this.isVerifyModalOpen = false;
  }
}
