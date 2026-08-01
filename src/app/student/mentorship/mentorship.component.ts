import { SidebarService } from '../../services/sidebar.service';
import { RouterModule } from '@angular/router';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mentorship',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './mentorship.component.html',
  styleUrl: './mentorship.component.css'
})
export class MentorshipComponent {
  sidebarService = inject(SidebarService);

  // Domain tab filter
  activeTab = 'all';
  tabs = ['All Domains', '💻 Tech Dev', '🧠 Logic & DS', '🤖 AI/DS', '🎨 UI/UX'];

  // Skill-swap
  isSkillSwapSent = false;

  // Help request modal
  isHelpRequestModalOpen = false;

  // Workshop registration
  registeredWorkshops = new Set<string>();

  // Help responses
  helpedStudents = new Set<number>();

  selectTab(tab: string) {
    this.activeTab = tab;
  }

  sendSkillSwap() {
    this.isSkillSwapSent = true;
  }

  toggleHelpRequestModal() {
    this.isHelpRequestModalOpen = !this.isHelpRequestModalOpen;
  }

  helpStudent(index: number) {
    this.helpedStudents.add(index);
  }

  registerWorkshop(workshopId: string) {
    this.registeredWorkshops.add(workshopId);
  }

  isRegistered(workshopId: string): boolean {
    return this.registeredWorkshops.has(workshopId);
  }

  hostWorkshop() {
    // Mock: would open a workshop creation modal
  }
}
