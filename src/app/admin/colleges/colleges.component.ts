import { SidebarService } from '../../services/sidebar.service';
import { RouterModule } from '@angular/router';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-colleges',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './colleges.component.html',
  styleUrl: './colleges.component.css'
})
export class CollegesComponent {
  sidebarService = inject(SidebarService);

  searchQuery = '';
  statusFilter = 'pending';
  isReviewModalOpen = false;
  selectedCollegeId = '';

  reviewCollege(collegeId: string) {
    this.selectedCollegeId = collegeId;
    this.isReviewModalOpen = true;
  }

  closeReviewModal() {
    this.isReviewModalOpen = false;
  }

  approveCollege() {
    this.isReviewModalOpen = false;
  }

  rejectCollege() {
    this.isReviewModalOpen = false;
  }
}
