import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'luster-activity-item',
  styleUrl: 'luster-activity-item.css',
  shadow: true,
})
export class DcActivityItem {
  @Prop() label: string = '';
  @Prop() description: string = '';
  @Prop() time: string = '';
  @Prop() variant: 'activity' | 'file' = 'activity';
  @Prop() icon: string = 'edit';
  @Prop() fileSize: string = '';
  @Prop() downloadable: boolean = false;

  private getIcon() {
    switch (this.icon) {
      case 'edit':
        return (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        );
      case 'sync':
        return (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <polyline points="1 4 1 10 7 10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M3.51 15a9 9 0 1 0 .49-8.49" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        );
      case 'user':
        return (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" stroke-width="2"/>
            <circle cx="12" cy="7" r="4" stroke="currentColor" stroke-width="2"/>
          </svg>
        );
      case 'file':
        return (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" stroke-width="2"/>
            <polyline points="14,2 14,8 20,8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        );
      default:
        return (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
          </svg>
        );
    }
  }

  render() {
    if (this.variant === 'file') {
      return (
        <div class="activity-item activity-item--file">
          <div class="activity-item__file-icon">
            {this.getIcon()}
          </div>
          <div class="activity-item__content">
            <span class="activity-item__title">{this.label}</span>
            <span class="activity-item__meta">
              {this.fileSize && <span>{this.fileSize}</span>}
              {this.time && <span>· {this.time}</span>}
            </span>
          </div>
          {this.downloadable && (
            <button class="activity-item__download" aria-label="Download">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                <polyline points="7,10 12,15 17,10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <line x1="12" y1="15" x2="12" y2="3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </button>
          )}
        </div>
      );
    }

    return (
      <div class="activity-item">
        <div class="activity-item__icon">{this.getIcon()}</div>
        <div class="activity-item__content">
          <span class="activity-item__title">{this.label}</span>
          {this.description && (
            <span class="activity-item__desc">{this.description}</span>
          )}
          {this.time && <span class="activity-item__time">{this.time}</span>}
        </div>
      </div>
    );
  }
}
