import { SidebarService } from '../../services/sidebar.service';
import { RouterModule } from '@angular/router';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-watchlist',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './watchlist.component.html',
  styleUrl: './watchlist.component.css'
})
export class WatchlistComponent {
  sidebarService = inject(SidebarService);

  activeFolder = 'all';
  folders = ['All Saved', 'Frontend Roles', 'Backend Roles', 'Campus Ambassadors'];

  candidates = [
    { name: 'Anika Kapoor', visible: true },
    { name: 'Suraj Varma', visible: true },
    { name: 'Shadow Profile #482', visible: true }
  ];

  isNewFolderModalOpen = false;

  selectFolder(folder: string) {
    this.activeFolder = folder;
  }

  removeCandidate(index: number) {
    this.candidates[index].visible = false;
  }

  openNewFolder() {
    this.isNewFolderModalOpen = true;
  }

  closeNewFolder() {
    this.isNewFolderModalOpen = false;
  }
}
