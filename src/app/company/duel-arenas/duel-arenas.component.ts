import { SidebarService } from '../../services/sidebar.service';
import { RouterModule } from '@angular/router';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-duel-arenas',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './duel-arenas.component.html',
  styleUrl: './duel-arenas.component.css'
})
export class DuelArenasComponent {
  sidebarService = inject(SidebarService);

  isCreateArenaOpen = false;
  isArenaPublished = false;
  isEditingArena = false;
  isViewingLeaderboard = false;

  createArena() {
    this.isCreateArenaOpen = true;
  }

  closeCreateArena() {
    this.isCreateArenaOpen = false;
  }

  publishArena() {
    this.isArenaPublished = true;
  }

  editArena() {
    this.isEditingArena = !this.isEditingArena;
  }

  viewLeaderboard() {
    this.isViewingLeaderboard = true;
  }

  closeLeaderboard() {
    this.isViewingLeaderboard = false;
  }
}
