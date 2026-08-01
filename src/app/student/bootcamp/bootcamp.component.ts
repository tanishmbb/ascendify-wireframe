import { CommonModule } from '@angular/common';
import { SidebarService } from '../../services/sidebar.service';
import { RouterModule } from '@angular/router';
import { Component , inject } from '@angular/core';

@Component({
  selector: 'app-bootcamp',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './bootcamp.component.html',
  styleUrl: './bootcamp.component.css'
})
export class BootcampComponent {
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
