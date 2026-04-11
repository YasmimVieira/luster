import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'luster-card',
  styleUrl: 'luster-card.css',
  shadow: true,
})
export class DcCard {
  @Prop() variant: 'default' | 'elevated' | 'glass' | 'feature' = 'default';
  @Prop() padding: 'sm' | 'md' | 'lg' | 'none' = 'md';
  @Prop() hoverable: boolean = false;

  render() {
    return (
      <div class={[
        'card',
        `card--${this.variant}`,
        `card--pad-${this.padding}`,
        this.hoverable ? 'card--hoverable' : '',
      ].filter(Boolean).join(' ')}>
        <slot />
      </div>
    );
  }
}
