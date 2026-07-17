import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-screening',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './screening.component.html',
  styleUrl: './screening.component.css'
})
export class ScreeningComponent {
  state: 'consent' | 'assessment' | 'finished' = 'consent';

  startAssessment() {
    this.state = 'assessment';
  }

  submitAssessment() {
    this.state = 'finished';
  }
}
