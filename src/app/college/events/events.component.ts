import { SidebarService } from '../../services/sidebar.service';
import { RouterModule } from '@angular/router';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent {
  sidebarService = inject(SidebarService);

  isCreateEventModalOpen = false;
  isDynamicQR = true;
  eventTitle = '';
  eventDate = '';
  eventTime = '';
  eventDomain = 'Cross-Domain (General)';
  eventXp = 50;
  isEventActive = true;

  toggleDynamicQR() {
    this.isDynamicQR = !this.isDynamicQR;
  }

  endEvent() {
    this.isEventActive = false;
  }

  generateEvent() {
    // Logic to generate event
    console.log('Generating event:', this.eventTitle, this.eventDate, this.eventTime, this.eventDomain, this.eventXp, this.isDynamicQR);
  }
}
