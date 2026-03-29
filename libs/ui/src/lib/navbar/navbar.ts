import { Component, input, signal } from '@angular/core';

export interface LusterNavItem {
  label: string;
  path: string;
}

@Component({
  selector: 'luster-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  readonly brandName = input<string>('LUSTER');
  readonly menuItems = input<LusterNavItem[]>([]);
  
  isMenuOpen = signal(false);

  toggleMenu() {
    this.isMenuOpen.update(v => !v);
  }
}
