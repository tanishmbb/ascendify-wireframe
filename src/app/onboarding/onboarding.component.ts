import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-onboarding',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './onboarding.component.html',
  styleUrl: './onboarding.component.css'
})
export class OnboardingComponent {
  private router = inject(Router);

  currentStep = 1;
  totalSteps = 5;

  // Consent state — defaults to unchecked (opt-in per DPDP)
  consentToS = false;
  consentDataProcessing = false;

  // Shadow mode
  shadowModeEnabled = true;

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
    this.router.navigate(['/student/home']);
  }
}
