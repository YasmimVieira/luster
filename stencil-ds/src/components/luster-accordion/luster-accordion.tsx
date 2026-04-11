import { Component, Prop, State, Event, EventEmitter, h } from '@stencil/core';

@Component({
  tag: 'luster-accordion',
  styleUrl: 'luster-accordion.css',
  shadow: true,
})
export class DcAccordion {
  @Prop() heading: string = '';
  @Prop() subtitle: string = '';
  @Prop() badge: string = '';
  @Prop() badgeVariant: 'primary' | 'default' | 'success' | 'beta' = 'default';
  @Prop({ mutable: true }) expanded: boolean = false;

  @State() isExpanded: boolean = false;

  @Event() dcToggle!: EventEmitter<boolean>;

  componentWillLoad() {
    this.isExpanded = this.expanded;
  }

  private handleToggle = () => {
    this.isExpanded = !this.isExpanded;
    this.dcToggle.emit(this.isExpanded);
  };

  render() {
    return (
      <div class={`accordion ${this.isExpanded ? 'accordion--expanded' : ''}`}>
        <button class="accordion__trigger" onClick={this.handleToggle} aria-expanded={this.isExpanded ? 'true' : 'false'}>
          <div class="accordion__trigger-left">
            {this.badge && (
              <luster-badge variant={this.badgeVariant} size="sm">{this.badge}</luster-badge>
            )}
            <div class="accordion__titles">
              <span class="accordion__title">{this.heading}</span>
              {this.subtitle && (
                <span class="accordion__subtitle">{this.subtitle}</span>
              )}
            </div>
          </div>
          <span class={`accordion__chevron ${this.isExpanded ? 'accordion__chevron--up' : ''}`}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <polyline points="6,9 12,15 18,9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>
        </button>

        <div class="accordion__content" aria-hidden={!this.isExpanded ? 'true' : 'false'}>
          <div class="accordion__inner">
            <slot />
          </div>
        </div>
      </div>
    );
  }
}
