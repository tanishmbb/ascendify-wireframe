import { Component } from '@angular/core';
import { CommonModule } from '@angular/core';
import { RouterModule } from '@angular/core';

@Component({
  selector: 'app-onboarding',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './onboarding.component.html',
  styleUrl: './onboarding.component.css'
})
export class OnboardingComponent {
  currentStep = 1;
  totalSteps = 5;

  nextStep() {
    if (this.currentStep < this.totalSteps) {
      this.currentStep++;
    }
  }

  prevStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  finish() {
    // Navigate to student dashboard (mock)
    window.location.href = '/student/dashboard';
  }
}
