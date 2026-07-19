import { SidebarService } from '../../services/sidebar.service';
import { RouterModule } from '@angular/router';
import { Component , inject } from '@angular/core';

@Component({
  selector: 'app-panels',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './panels.component.html',
  styleUrl: './panels.component.css'
})
export class PanelsComponent {
  sidebarService = inject(SidebarService);


}
