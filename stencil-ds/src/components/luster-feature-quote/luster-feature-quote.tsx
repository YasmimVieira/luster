import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'luster-feature-quote',
  styleUrl: 'luster-feature-quote.css',
  shadow: true,
})
export class DcFeatureQuote {
  @Prop() quote: string = '';
  @Prop() author: string = '';
  @Prop() role: string = '';
  @Prop() variant: 'default' | 'large' | 'inline' = 'default';

  render() {
    return (
      <blockquote class={`feature-quote feature-quote--${this.variant}`}>
        <span class="feature-quote__mark">"</span>
        <p class="feature-quote__text">{this.quote || <slot />}</p>
        {(this.author || this.role) && (
          <footer class="feature-quote__attribution">
            {this.author && (
              <div class="feature-quote__author-wrap">
                <div class="feature-quote__author-avatar">
                  {this.author.charAt(0)}
                </div>
                <div>
                  <span class="feature-quote__author">{this.author}</span>
                  {this.role && <span class="feature-quote__role">{this.role}</span>}
                </div>
              </div>
            )}
          </footer>
        )}
      </blockquote>
    );
  }
}
