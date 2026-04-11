import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'luster-profile-card',
  styleUrl: 'luster-profile-card.css',
  shadow: true,
})
export class DcProfileCard {
  @Prop() name: string = '';
  @Prop() role: string = '';
  @Prop() avatar: string = '';
  @Prop() stat1Value: string = '';
  @Prop() stat1Label: string = '';
  @Prop() stat2Value: string = '';
  @Prop() stat2Label: string = '';
  @Prop() ctaLabel: string = 'View Portfolio';

  render() {
    return (
      <div class="profile-card">
        <div class="profile-card__avatar">
          {this.avatar
            ? <img src={this.avatar} alt={this.name} class="profile-card__avatar-img" />
            : <span class="profile-card__avatar-initials">{this.name.split(' ').map(n => n[0]).join('').slice(0, 2)}</span>
          }
        </div>
        <div class="profile-card__info">
          <h3 class="profile-card__name">{this.name}</h3>
          <span class="profile-card__role">{this.role}</span>
        </div>

        {(this.stat1Value || this.stat2Value) && (
          <div class="profile-card__stats">
            {this.stat1Value && (
              <div class="profile-card__stat">
                <span class="profile-card__stat-value">{this.stat1Value}</span>
                <span class="profile-card__stat-label">{this.stat1Label}</span>
              </div>
            )}
            {this.stat2Value && (
              <div class="profile-card__stat">
                <span class="profile-card__stat-value">{this.stat2Value}</span>
                <span class="profile-card__stat-label">{this.stat2Label}</span>
              </div>
            )}
          </div>
        )}

        <luster-button variant="primary" full-width>
          {this.ctaLabel}
        </luster-button>
      </div>
    );
  }
}
