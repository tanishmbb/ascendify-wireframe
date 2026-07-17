import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./landing/landing.component').then(m => m.LandingComponent) },
  { path: 'auth', loadComponent: () => import('./auth/auth.component').then(m => m.AuthComponent) },
  { path: 'onboarding', loadComponent: () => import('./onboarding/onboarding.component').then(m => m.OnboardingComponent) },
  { path: 'terms', loadComponent: () => import('./terms/terms.component').then(m => m.TermsComponent) },
  { path: 'privacy', loadComponent: () => import('./privacy/privacy.component').then(m => m.PrivacyComponent) },
  
  { path: 'admin/colleges', loadComponent: () => import('./admin/colleges/colleges.component').then(m => m.CollegesComponent) },
  { path: 'admin/companies', loadComponent: () => import('./admin/companies/companies.component').then(m => m.CompaniesComponent) },
  { path: 'admin/content', loadComponent: () => import('./admin/content/content.component').then(m => m.ContentComponent) },
  { path: 'admin/dashboard', loadComponent: () => import('./admin/dashboard/dashboard.component').then(m => m.DashboardComponent) },
  { path: 'admin/fraud', loadComponent: () => import('./admin/fraud/fraud.component').then(m => m.FraudComponent) },
  { path: 'admin/support', loadComponent: () => import('./admin/support/support.component').then(m => m.SupportComponent) },

  { path: 'stakeholder/dashboard', loadComponent: () => import('./stakeholder/dashboard/dashboard.component').then(m => m.DashboardComponent) },

  { path: 'super-admin/dashboard', loadComponent: () => import('./super-admin/dashboard/dashboard.component').then(m => m.DashboardComponent) },
  { path: 'super-admin/finance', loadComponent: () => import('./super-admin/finance/finance.component').then(m => m.FinanceComponent) },
  { path: 'super-admin/settings', loadComponent: () => import('./super-admin/settings/settings.component').then(m => m.SettingsComponent) },
  
  { path: 'college/analytics', loadComponent: () => import('./college/analytics/analytics.component').then(m => m.AnalyticsComponent) },
  { path: 'college/bootcamps', loadComponent: () => import('./college/bootcamps/bootcamps.component').then(m => m.BootcampsComponent) },
  { path: 'college/dashboard', loadComponent: () => import('./college/dashboard/dashboard.component').then(m => m.DashboardComponent) },
  { path: 'college/events', loadComponent: () => import('./college/events/events.component').then(m => m.EventsComponent) },
  { path: 'college/panels', loadComponent: () => import('./college/panels/panels.component').then(m => m.PanelsComponent) },
  { path: 'college/students', loadComponent: () => import('./college/students/students.component').then(m => m.StudentsComponent) },

  { path: 'company/analytics', loadComponent: () => import('./company/analytics/analytics.component').then(m => m.AnalyticsComponent) },
  { path: 'company/billing', loadComponent: () => import('./company/billing/billing.component').then(m => m.BillingComponent) },
  { path: 'company/bounty', loadComponent: () => import('./company/bounty/bounty.component').then(m => m.BountyComponent) },
  { path: 'company/duel-arenas', loadComponent: () => import('./company/duel-arenas/duel-arenas.component').then(m => m.DuelArenasComponent) },
  { path: 'company/screening-results', loadComponent: () => import('./company/screening-results/screening-results.component').then(m => m.ScreeningResultsComponent) },
  { path: 'company/screening-setup', loadComponent: () => import('./company/screening-setup/screening-setup.component').then(m => m.ScreeningSetupComponent) },
  { path: 'company/spotlight', loadComponent: () => import('./company/spotlight/spotlight.component').then(m => m.SpotlightComponent) },
  { path: 'company/student-profile', loadComponent: () => import('./company/student-profile/student-profile.component').then(m => m.StudentProfileComponent) },
  { path: 'company/talent-search', loadComponent: () => import('./company/talent-search/talent-search.component').then(m => m.TalentSearchComponent) },
  { path: 'company/watchlist', loadComponent: () => import('./company/watchlist/watchlist.component').then(m => m.WatchlistComponent) },

  { path: 'student/bootcamp', loadComponent: () => import('./student/bootcamp/bootcamp.component').then(m => m.BootcampComponent) },
  { path: 'student/duels', loadComponent: () => import('./student/duels/duels.component').then(m => m.DuelsComponent) },
  { path: 'student/home', loadComponent: () => import('./student/home/home.component').then(m => m.HomeComponent) },
  { path: 'student/leaderboard', loadComponent: () => import('./student/leaderboard/leaderboard.component').then(m => m.LeaderboardComponent) },
  { path: 'student/mentorship', loadComponent: () => import('./student/mentorship/mentorship.component').then(m => m.MentorshipComponent) },
  { path: 'student/profile', loadComponent: () => import('./student/profile/profile.component').then(m => m.ProfileComponent) },
  { path: 'student/quests', loadComponent: () => import('./student/quests/quests.component').then(m => m.QuestsComponent) },
  { path: 'student/screening/:roundId', loadComponent: () => import('./student/screening/screening.component').then(m => m.ScreeningComponent) },
  { path: 'student/settings', loadComponent: () => import('./student/settings/settings.component').then(m => m.SettingsComponent) },

  { path: 'evaluator/dashboard', loadComponent: () => import('./evaluator/dashboard/dashboard.component').then(m => m.DashboardComponent) },
  { path: '**', redirectTo: '' }
];
