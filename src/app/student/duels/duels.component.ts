import { SidebarService } from '../../services/sidebar.service';
import { RouterModule } from '@angular/router';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-duels',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './duels.component.html',
  styleUrl: './duels.component.css'
})
export class DuelsComponent {
  sidebarService = inject(SidebarService);

  // Challenge form state
  selectedDomain = '💻 Tech Dev';
  selectedFormat = '30-min Code Sprint';
  opponentSearch = '';
  isChallengeFormVisible = true;
  isChallengeSent = false;

  // Incoming challenge
  isIncomingChallengeVisible = true;

  // Duel formats
  formats = ['30-min Code Sprint', 'Peer-Voted Pitch', 'Redesign Sprint', 'Dataset Challenge'];

  selectFormat(format: string) {
    this.selectedFormat = format;
  }

  sendChallenge() {
    if (this.opponentSearch.trim()) {
      this.isChallengeSent = true;
      setTimeout(() => this.isChallengeSent = false, 3000);
    }
  }

  acceptChallenge() {
    this.isIncomingChallengeVisible = false;
  }

  declineChallenge() {
    this.isIncomingChallengeVisible = false;
  }

  challengePeer() {
    this.isChallengeFormVisible = true;
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
