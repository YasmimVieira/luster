import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'luster-stat-card',
  styleUrl: 'luster-stat-card.css',
  shadow: true,
})
export class DcStatCard {
  @Prop() heading: string = '';
  @Prop() description: string = '';
  @Prop() version: string = '';
  @Prop() status: 'active' | 'beta' | 'deprecated' = 'active';
  @Prop() users: string = '';
  @Prop() hasToggle: boolean = false;
  @Prop() toggleOn: boolean = false;
  @Prop() icon: string = '';

  render() {
    return (
      <div class="stat-card">
        <div class="stat-card__header">
          <div class="stat-card__icon-wrap">
            {this.icon
              ? <span class="stat-card__icon" innerHTML={this.icon} />
              : <div class="stat-card__icon-placeholder" />
            }
          </div>
        </div>

        <div class="stat-card__body">
          <h4 class="stat-card__title">{this.heading}</h4>
          <p class="stat-card__desc">{this.description}</p>
        </div>

        <div class="stat-card__footer">
          <div class="stat-card__meta">
            {this.version && <luster-badge variant="default" size="sm">{this.version}</luster-badge>}
            {this.status === 'beta' && <luster-badge variant="beta" size="sm">Beta</luster-badge>}
            {this.users && (
              <span class="stat-card__users">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" stroke-width="2"/>
                  <circle cx="9" cy="7" r="4" stroke="currentColor" stroke-width="2"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" stroke-width="2"/>
                </svg>
                {this.users}
              </span>
            )}
          </div>
          {this.hasToggle && <luster-toggle checked={this.toggleOn} />}
        </div>
      </div>
    );
  }
}
