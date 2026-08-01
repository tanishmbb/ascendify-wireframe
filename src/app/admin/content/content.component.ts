import { SidebarService } from '../../services/sidebar.service';
import { RouterModule } from '@angular/router';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  sidebarService = inject(SidebarService);

  activeTab = 'reported';
  tabs = ['Reported Posts', 'Problem Bank Review', 'Arena Comments'];
  isActionModalOpen = false;
  selectedAction = '';
  selectedContentId = '';

  selectTab(tab: string) {
    this.activeTab = tab;
  }

  takeAction(contentId: string) {
    this.selectedContentId = contentId;
    this.isActionModalOpen = true;
  }

  closeActionModal() {
    this.isActionModalOpen = false;
    this.selectedAction = '';
  }

  executeAction() {
    console.log('Action:', this.selectedAction, 'on content:', this.selectedContentId);
    this.isActionModalOpen = false;
    this.selectedAction = '';
  }
}
