import { SidebarService } from '../../services/sidebar.service';
import { RouterModule } from '@angular/router';
import { Component , inject } from '@angular/core';

@Component({
  selector: 'app-screening-setup',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './screening-setup.component.html',
  styleUrl: './screening-setup.component.css'
})
export class ScreeningSetupComponent {
  sidebarService = inject(SidebarService);


}
