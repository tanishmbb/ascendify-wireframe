import { SidebarService } from '../../services/sidebar.service';
import { RouterModule } from '@angular/router';
import { Component , inject } from '@angular/core';

@Component({
  selector: 'app-spotlight',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './spotlight.component.html',
  styleUrl: './spotlight.component.css'
})
export class SpotlightComponent {
  sidebarService = inject(SidebarService);


}
