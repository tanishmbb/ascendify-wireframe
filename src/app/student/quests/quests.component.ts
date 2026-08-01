import { CommonModule } from '@angular/common';
import { SidebarService } from '../../services/sidebar.service';
import { RouterModule } from '@angular/router';
import { Component , inject } from '@angular/core';

@Component({
  selector: 'app-quests',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './quests.component.html',
  styleUrl: './quests.component.css'
})
export class QuestsComponent {
  sidebarService = inject(SidebarService);



  isNotificationDrawerOpen = false;
  isAchievementModalOpen = false;

  toggleNotifications() {
    this.isNotificationDrawerOpen = !this.isNotificationDrawerOpen;
  }

  openAchievementModal() {
    this.isAchievementModalOpen = true;
  }

  closeAchievementModal() {
    this.isAchievementModalOpen = false;
  }
}
