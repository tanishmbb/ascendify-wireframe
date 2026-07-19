import { SidebarService } from '../../services/sidebar.service';
import { RouterModule } from '@angular/router';
import { Component , inject } from '@angular/core';

@Component({
  selector: 'app-fraud',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './fraud.component.html',
  styleUrl: './fraud.component.css'
})
export class FraudComponent {
  sidebarService = inject(SidebarService);


}
