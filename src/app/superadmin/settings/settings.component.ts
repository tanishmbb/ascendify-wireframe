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

  // Maintenance mode toggle
  isMaintenanceMode = false;

  // Algorithm tuning
  xpWeight = 40;

  // Kill switch
  isKillSwitchConfirmOpen = false;
  isKillSwitchExecuted = false;

  toggleMaintenanceMode() {
    this.isMaintenanceMode = !this.isMaintenanceMode;
  }

  executeKillSwitch() {
    this.isKillSwitchConfirmOpen = true;
  }

  confirmKillSwitch() {
    this.isKillSwitchExecuted = true;
    this.isKillSwitchConfirmOpen = false;
  }

  cancelKillSwitch() {
    this.isKillSwitchConfirmOpen = false;
  }

  resetKillSwitch() {
    this.isKillSwitchExecuted = false;
  }
}
