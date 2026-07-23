import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  isCollapsed = signal<boolean>(false);
  isMobileOpen = signal<boolean>(false);

  toggleSidebar(): void {
    this.isCollapsed.update(val => !val);
  }

  toggleMobile(): void {
    this.isMobileOpen.update(val => !val);
  }

  closeMobile(): void {
    this.isMobileOpen.set(false);
  }
}
