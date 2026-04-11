import { Component, Prop, Event, EventEmitter, h } from '@stencil/core';

@Component({
  tag: 'luster-button',
  styleUrl: 'luster-button.css',
  shadow: true,
})
export class DcButton {
  @Prop() variant: 'primary' | 'secondary' | 'tertiary' | 'destructive' = 'primary';
  @Prop() size: 'sm' | 'md' | 'lg' = 'md';
  @Prop() disabled: boolean = false;
  @Prop() loading: boolean = false;
  @Prop() fullWidth: boolean = false;
  @Prop() type: 'button' | 'submit' | 'reset' = 'button';

  @Event() dcClick!: EventEmitter<void>;

  private handleClick = () => {
    if (!this.disabled && !this.loading) {
      this.dcClick.emit();
    }
  };

  render() {
    return (
      <button
        class={[
          'btn',
          `btn--${this.variant}`,
          `btn--${this.size}`,
          this.loading ? 'btn--loading' : '',
          this.fullWidth ? 'btn--full' : '',
        ].filter(Boolean).join(' ')}
        disabled={this.disabled || this.loading}
        type={this.type}
        onClick={this.handleClick}
      >
        {this.loading && (
          <span class="btn__spinner" aria-hidden="true" />
        )}
        <span class="btn__content">
          <slot />
        </span>
      </button>
    );
  }
}
