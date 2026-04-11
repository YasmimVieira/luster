import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'luster-navbar',
  styleUrl: 'luster-navbar.css',
  shadow: true,
})
export class DcNavbar {
  @Prop() logoTitle: string = 'The Digital Curator';
  @Prop() logoSub: string = 'EDITORIAL SYSTEM';
  @Prop() activeLink: string = 'explorer';

  render() {
    return (
      <nav class="navbar">
        <div class="navbar__logo">
          <div class="navbar__logo-icon">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <rect x="2" y="2" width="8" height="8" rx="1.5" fill="var(--dc-primary)" opacity="0.9"/>
              <rect x="12" y="2" width="8" height="8" rx="1.5" fill="var(--dc-primary)" opacity="0.55"/>
              <rect x="2" y="12" width="8" height="8" rx="1.5" fill="var(--dc-primary)" opacity="0.55"/>
              <rect x="12" y="12" width="8" height="8" rx="1.5" fill="var(--dc-primary)" opacity="0.25"/>
            </svg>
          </div>
          <div class="navbar__logo-text">
            <span class="navbar__logo-title">{this.logoTitle}</span>
            <span class="navbar__logo-sub">{this.logoSub}</span>
          </div>
        </div>

        <div class="navbar__nav">
          <a class={`navbar__link ${this.activeLink === 'explorer' ? 'navbar__link--active' : ''}`}>
            Design System Explorer
          </a>
          <a class="navbar__link">Docs</a>
          <a class="navbar__link">Updates</a>
          <a class="navbar__link">Community</a>
        </div>

        <div class="navbar__actions">
          <div class="navbar__search">
            <svg class="navbar__search-icon" width="13" height="13" viewBox="0 0 24 24" fill="none">
              <circle cx="11" cy="11" r="8" stroke="currentColor" stroke-width="2.5"/>
              <path d="m21 21-4.35-4.35" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
            </svg>
            <input class="navbar__search-input" placeholder="Search components..." />
          </div>
          <button class="navbar__icon-btn" aria-label="Notifications">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M13.73 21a2 2 0 0 1-3.46 0" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </button>
          <button class="navbar__icon-btn" aria-label="Settings">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2"/>
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" stroke="currentColor" stroke-width="2"/>
            </svg>
          </button>
          <div class="navbar__avatar">DC</div>
        </div>
      </nav>
    );
  }
}
