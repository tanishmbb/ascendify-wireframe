import { SidebarService } from '../../services/sidebar.service';
import { RouterModule } from '@angular/router';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-support',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './support.component.html',
  styleUrl: './support.component.css'
})
export class SupportComponent {
  sidebarService = inject(SidebarService);

  selectedTicket = 0;
  replyText = '';
  ticketStatus = 'Open';
  isAssignedToMe = false;
  searchQuery = '';
  isReplySent = false;

  selectTicket(index: number) {
    this.selectedTicket = index;
  }

  assignToMe() {
    this.isAssignedToMe = true;
  }

  sendReply() {
    if (this.replyText.trim()) {
      this.isReplySent = true;
      this.replyText = '';
      setTimeout(() => this.isReplySent = false, 2000);
    }
  }
}
