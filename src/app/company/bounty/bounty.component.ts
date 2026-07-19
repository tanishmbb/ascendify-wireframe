import { SidebarService } from '../../services/sidebar.service';
import { RouterModule } from '@angular/router';
import { Component , inject } from '@angular/core';

@Component({
  selector: 'app-bounty',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './bounty.component.html',
  styleUrl: './bounty.component.css'
})
export class BountyComponent {
  sidebarService = inject(SidebarService);


}
