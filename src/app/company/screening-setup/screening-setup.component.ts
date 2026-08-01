import { SidebarService } from '../../services/sidebar.service';
import { RouterModule } from '@angular/router';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-screening-setup',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './screening-setup.component.html',
  styleUrl: './screening-setup.component.css'
})
export class ScreeningSetupComponent {
  sidebarService = inject(SidebarService);

  // Problem source selection
  selectedProblemSource = 'bank';

  // Proctoring level selection
  selectedProctoringLevel = 'tab';
  proctoringLevels = [
    { id: 'none', label: 'None' },
    { id: 'tab', label: 'Tab Detection' },
    { id: 'camera', label: 'Camera-On' }
  ];

  // Anti-cheat checkboxes
  antiCheatPlagiarism = true;
  antiCheatCopyPaste = true;
  antiCheatAudioRecording = false;

  // Link to XP toggle
  isLinkToXpEnabled = true;

  // Form submission
  isRoundCreated = false;

  selectProblemSource(source: string) {
    this.selectedProblemSource = source;
  }

  selectProctoringLevel(level: string) {
    this.selectedProctoringLevel = level;
  }

  toggleLinkToXp() {
    this.isLinkToXpEnabled = !this.isLinkToXpEnabled;
  }

  createScreeningRound() {
    this.isRoundCreated = true;
    setTimeout(() => this.isRoundCreated = false, 3000);
  }
}
