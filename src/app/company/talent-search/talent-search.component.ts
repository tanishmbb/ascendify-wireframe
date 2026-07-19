import { SidebarService } from '../../services/sidebar.service';
import { RouterModule } from '@angular/router';
import { Component , inject } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-talent-search',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './talent-search.component.html',
  styleUrl: './talent-search.component.css'
})
export class TalentSearchComponent {
  sidebarService = inject(SidebarService);

  isSavedSearchesOpen = false;

  toggleSavedSearches() {
    this.isSavedSearchesOpen = !this.isSavedSearchesOpen;
  }
}
