import { Component, Prop, State, Event, EventEmitter, h } from '@stencil/core';

@Component({
  tag: 'luster-alert',
  styleUrl: 'luster-alert.css',
  shadow: true,
})
export class DcAlert {
  @Prop() heading: string = '';
  @Prop() message: string = '';
  @Prop() variant: 'info' | 'success' | 'warning' | 'error' = 'info';
  @Prop() dismissible: boolean = true;
  @Prop() timestamp: string = '';

  @State() visible: boolean = true;

  @Event() dcDismiss!: EventEmitter<void>;

  private dismiss = () => {
    this.visible = false;
    this.dcDismiss.emit();
  };

  private getIcon() {
    switch (this.variant) {
      case 'success':
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
            <path d="M8 12l3 3 5-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        );
      case 'error':
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
            <line x1="15" y1="9" x2="9" y2="15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            <line x1="9" y1="9" x2="15" y2="15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        );
      case 'warning':
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" stroke="currentColor" stroke-width="2"/>
            <line x1="12" y1="9" x2="12" y2="13" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            <line x1="12" y1="17" x2="12.01" y2="17" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        );
      default:
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
            <line x1="12" y1="8" x2="12" y2="12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            <line x1="12" y1="16" x2="12.01" y2="16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        );
    }
  }

  render() {
    if (!this.visible) return null;

    return (
      <div class={`alert alert--${this.variant}`} role="alert">
        <span class="alert__icon">{this.getIcon()}</span>
        <div class="alert__body">
          {this.heading && <span class="alert__title">{this.heading}</span>}
          {this.message && <span class="alert__message">{this.message}</span>}
          {this.timestamp && <span class="alert__time">{this.timestamp}</span>}
        </div>
        {this.dismissible && (
          <button class="alert__close" onClick={this.dismiss} aria-label="Dismiss">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
              <line x1="18" y1="6" x2="6" y2="18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              <line x1="6" y1="6" x2="18" y2="18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </button>
        )}
      </div>
    );
  }
}
