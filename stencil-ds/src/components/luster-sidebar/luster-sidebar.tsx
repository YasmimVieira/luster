import { Component, Prop, Event, EventEmitter, h } from '@stencil/core';

@Component({
  tag: 'luster-sidebar',
  styleUrl: 'luster-sidebar.css',
  shadow: true,
})
export class DcSidebar {
  @Prop() active: string = 'foundations';

  @Event({ bubbles: true, composed: true }) dcNavChange!: EventEmitter<string>;

  private handleNav = (key: string) => {
    this.dcNavChange.emit(key);
  };

  private navItems = [
    { key: 'foundations', label: 'Foundations' },
    { key: 'buttons-inputs', label: 'Buttons & Inputs' },
    { key: 'navigation', label: 'Navigation & Feedback' },
    { key: 'cards', label: 'Cards & Data' },
  ];

  private icons: Record<string, any> = {
    foundations: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <polygon points="12,3 22,21 2,21" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
      </svg>
    ),
    'buttons-inputs': (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="9" width="18" height="7" rx="3.5" stroke="currentColor" stroke-width="2"/>
      </svg>
    ),
    navigation: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        <path d="M13.73 21a2 2 0 0 1-3.46 0" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      </svg>
    ),
    cards: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="4" width="20" height="13" rx="2" stroke="currentColor" stroke-width="2"/>
        <path d="M8 21h8M12 17v4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      </svg>
    ),
  };

  render() {
    return (
      <aside class="sidebar">
        <nav class="sidebar__nav">
          {this.navItems.map(item => (
            <a
              key={item.key}
              class={`sidebar__item ${this.active === item.key ? 'sidebar__item--active' : ''}`}
              onClick={() => this.handleNav(item.key)}
            >
              <span class="sidebar__icon">{this.icons[item.key]}</span>
              <span class="sidebar__label">{item.label}</span>
            </a>
          ))}
        </nav>

        <div class="sidebar__bottom">
          <button class="sidebar__new-btn">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <line x1="12" y1="5" x2="12" y2="19" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
              <line x1="5" y1="12" x2="19" y2="12" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
            </svg>
            New Component
          </button>

          <div class="sidebar__footer-links">
            <a class="sidebar__item sidebar__item--sm">
              <span class="sidebar__icon">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2"/>
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" stroke="currentColor" stroke-width="2"/>
                </svg>
              </span>
              <span class="sidebar__label">Settings</span>
            </a>
            <a class="sidebar__item sidebar__item--sm">
              <span class="sidebar__icon">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                  <path d="M12 16v-4M12 8h.01" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
              </span>
              <span class="sidebar__label">Support</span>
            </a>
          </div>

          <div class="sidebar__user">
            <div class="sidebar__user-avatar">AV</div>
            <div class="sidebar__user-info">
              <span class="sidebar__user-name">Alex Curator</span>
              <span class="sidebar__user-role">Lead Editor</span>
            </div>
          </div>
        </div>
      </aside>
    );
  }
}
