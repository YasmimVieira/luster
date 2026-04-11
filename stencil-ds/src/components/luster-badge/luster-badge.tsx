import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'luster-badge',
  styleUrl: 'luster-badge.css',
  shadow: true,
})
export class DcBadge {
  @Prop() variant: 'default' | 'primary' | 'success' | 'warning' | 'error' | 'beta' | 'live' = 'default';
  @Prop() dot: boolean = false;
  @Prop() size: 'sm' | 'md' = 'md';

  render() {
    return (
      <span class={`badge badge--${this.variant} badge--${this.size}`}>
        {this.dot && <span class="badge__dot" />}
        <slot />
      </span>
    );
  }
}
