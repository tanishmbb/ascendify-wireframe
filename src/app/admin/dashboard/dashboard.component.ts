import { SidebarService } from '../../services/sidebar.service';
import { RouterModule } from '@angular/router';
import { Component , inject } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  sidebarService = inject(SidebarService);

  isGeneratingReport = false;

  generateReport() {
    this.isGeneratingReport = true;
    setTimeout(() => this.isGeneratingReport = false, 1500);
  }

  reviewItem(id: string) {
    console.log('Reviewing item:', id);
  }
}
