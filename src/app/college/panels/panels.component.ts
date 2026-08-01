import { SidebarService } from '../../services/sidebar.service';
import { RouterModule } from '@angular/router';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-panels',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './panels.component.html',
  styleUrl: './panels.component.css'
})
export class PanelsComponent {
  sidebarService = inject(SidebarService);

  assignmentStrategy = 'Strict Domain Match';
  isAutoAssigning = false;
  isMagicLinkGenerated = false;

  autoAssign() {
    this.isAutoAssigning = true;
    setTimeout(() => this.isAutoAssigning = false, 1500);
  }

  generateMagicLink() {
    this.isMagicLinkGenerated = true;
    setTimeout(() => this.isMagicLinkGenerated = false, 2000);
  }
}
