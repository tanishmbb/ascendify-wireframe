import { SidebarService } from '../../services/sidebar.service';
import { RouterModule } from '@angular/router';
import { Component , inject } from '@angular/core';

@Component({
  selector: 'app-colleges',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './colleges.component.html',
  styleUrl: './colleges.component.css'
})
export class CollegesComponent {
  sidebarService = inject(SidebarService);


}
