import { SidebarService } from '../../services/sidebar.service';
import { RouterModule } from '@angular/router';
import { Component , inject } from '@angular/core';

@Component({
  selector: 'app-bootcamps',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './bootcamps.component.html',
  styleUrl: './bootcamps.component.css'
})
export class BootcampsComponent {
  sidebarService = inject(SidebarService);


}
