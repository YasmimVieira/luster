import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'luster-color-swatch',
  styleUrl: 'luster-color-swatch.css',
  shadow: true,
})
export class DcColorSwatch {
  @Prop() color: string = '#a3a6ff';
  @Prop() name: string = '';
  @Prop() hex: string = '';
  @Prop() size: 'sm' | 'md' | 'lg' = 'md';

  render() {
    return (
      <div class={`swatch swatch--${this.size}`}>
        <div class="swatch__color" style={{ backgroundColor: this.color }} />
        <div class="swatch__info">
          {this.name && <span class="swatch__name">{this.name}</span>}
          {this.hex && <span class="swatch__hex">{this.hex}</span>}
        </div>
      </div>
    );
  }
}
