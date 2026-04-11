import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'luster-article-card',
  styleUrl: 'luster-article-card.css',
  shadow: true,
})
export class DcArticleCard {
  @Prop() category: string = '';
  @Prop() heading: string = '';
  @Prop() excerpt: string = '';
  @Prop() date: string = '';
  @Prop() author: string = '';
  @Prop() authorRole: string = '';
  @Prop() imageUrl: string = '';
  @Prop() featured: boolean = false;

  render() {
    return (
      <article class={`article-card ${this.featured ? 'article-card--featured' : ''}`}>
        {this.featured && this.imageUrl && (
          <div class="article-card__image">
            <img src={this.imageUrl} alt={this.heading} />
            <div class="article-card__image-overlay" />
          </div>
        )}
        <div class="article-card__body">
          {this.category && (
            <span class="article-card__category">{this.category}</span>
          )}
          {this.date && !this.featured && (
            <span class="article-card__date">{this.date}</span>
          )}
          {this.date && this.featured && (
            <span class="article-card__date">{this.date}</span>
          )}
          <h3 class="article-card__title">{this.heading}</h3>
          {this.excerpt && (
            <p class="article-card__excerpt">{this.excerpt}</p>
          )}
          {(this.author || this.authorRole) && (
            <div class="article-card__byline">
              <div class="article-card__author-avatar">
                {this.author.charAt(0)}
              </div>
              <div>
                <span class="article-card__author">{this.author}</span>
                {this.authorRole && <span class="article-card__author-role">{this.authorRole}</span>}
              </div>
              <span class="article-card__read-more">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                More
              </span>
            </div>
          )}
        </div>
      </article>
    );
  }
}
