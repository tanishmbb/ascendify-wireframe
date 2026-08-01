import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-screening',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './screening.component.html',
  styleUrl: './screening.component.css'
})
export class ScreeningComponent {
  state: 'consent' | 'assessment' | 'finished' = 'consent';

  startAssessment() {
    this.state = 'assessment';
  }

  submitAssessment() {
    this.state = 'finished';
  }

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
