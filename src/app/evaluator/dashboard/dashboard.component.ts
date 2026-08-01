import { SidebarService } from '../../services/sidebar.service';
import { RouterModule } from '@angular/router';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  sidebarService = inject(SidebarService);

  // Rubric scores
  scores = {
    technical: 32,
    innovation: 18,
    presentation: 0,
    design: 0
  };

  juryComment = '';
  isBreakRequested = false;
  isScoreSubmitted = false;

  selectedTeamIndex = 2; // "Syntax Error" is active

  teams = [
    { name: 'Team Alpha', score: 84, status: 'done', time: '10:15 AM' },
    { name: 'CodeCrafters', score: 92, status: 'done', time: '10:32 AM' },
    { name: 'Syntax Error', score: null, status: 'evaluating', time: '10:35 AM' },
    { name: 'Logic Bomb', score: null, status: 'pending', time: '10:50 AM' },
    { name: 'Tech Titans', score: null, status: 'pending', time: '' },
    { name: 'Null Pointers', score: null, status: 'pending', time: '' }
  ];

  get totalScore(): number {
    return this.scores.technical + this.scores.innovation + this.scores.presentation + this.scores.design;
  }

  selectTeam(index: number) {
    this.selectedTeamIndex = index;
  }

  submitScoreAndNext() {
    // Mark current team as done
    this.teams[this.selectedTeamIndex].score = this.totalScore;
    this.teams[this.selectedTeamIndex].status = 'done';

    // Move to next team
    if (this.selectedTeamIndex < this.teams.length - 1) {
      this.selectedTeamIndex++;
      this.teams[this.selectedTeamIndex].status = 'evaluating';
    }

    // Reset scores
    this.scores = { technical: 0, innovation: 0, presentation: 0, design: 0 };
    this.juryComment = '';
    this.isScoreSubmitted = true;
    setTimeout(() => this.isScoreSubmitted = false, 2000);
  }

  requestBreak() {
    this.isBreakRequested = true;
  }
}
