import { SidebarService } from '../../services/sidebar.service';
import { RouterModule } from '@angular/router';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {
  sidebarService = inject(SidebarService);

  // Privacy mode: 'ghost' | 'anonymous' | 'public'
  privacyMode = 'anonymous';

  // Notification preferences
  notifications: Record<string, boolean> = {
    xpEarned: true,
    rankChange: true,
    duelRequests: true,
    bootcampReminders: true,
    companyInterest: true,
    weeklyDigest: false
  };

  // Appearance
  isDarkMode = true;
  selectedLanguage = 'English';

  // Exam mode
  isExamModeActive = false;
  examActivationsLeft = 3;

  // Connected accounts
  connectedAccounts = [
    { name: 'GitHub', icon: '🐙', handle: '@rahulk21', lastSync: '2 min ago', connected: true },
    { name: 'LeetCode', icon: '🧩', handle: '@rahul_kumar', lastSync: '3 hours ago', connected: true },
    { name: 'CodeChef', icon: '🍽️', handle: '', lastSync: '', connected: false },
    { name: 'Codeforces', icon: '🏆', handle: '', lastSync: '', connected: false },
    { name: 'Kaggle', icon: '📊', handle: '', lastSync: '', connected: false },
    { name: 'LinkedIn', icon: '💼', handle: '', lastSync: '', connected: false }
  ];

  // Danger zone
  isDeleteConfirmOpen = false;
  isExportingData = false;

  selectPrivacyMode(mode: string) {
    this.privacyMode = mode;
  }

  toggleNotification(key: string) {
    this.notifications[key] = !this.notifications[key];
  }

  activateExamMode() {
    if (this.examActivationsLeft > 0 && !this.isExamModeActive) {
      this.isExamModeActive = true;
      this.examActivationsLeft--;
    }
  }

  deactivateExamMode() {
    this.isExamModeActive = false;
  }

  toggleAccount(index: number) {
    this.connectedAccounts[index].connected = !this.connectedAccounts[index].connected;
  }

  exportData() {
    this.isExportingData = true;
    setTimeout(() => this.isExportingData = false, 2000);
  }

  confirmDeleteAccount() {
    this.isDeleteConfirmOpen = true;
  }

  cancelDelete() {
    this.isDeleteConfirmOpen = false;
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
