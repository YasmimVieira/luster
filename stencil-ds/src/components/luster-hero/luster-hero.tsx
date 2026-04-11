import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'luster-hero',
  styleUrl: 'luster-hero.css',
  shadow: true,
})
export class DcHero {
  @Prop() heading: string = '';
  @Prop() subtitle: string = '';
  @Prop() section: string = '';
  @Prop() imageUrl: string = '';
  @Prop() parallax: boolean = false;

  render() {
    return (
      <section class={`hero ${this.parallax ? 'hero--parallax' : ''}`}>
        <div class="hero__bg">
          {this.imageUrl && (
            <img class="hero__bg-img" src={this.imageUrl} alt="" aria-hidden="true" />
          )}
          <div class="hero__bg-overlay" />
          <div class="hero__bg-gradient" />
        </div>

        <div class="hero__content">
          {this.section && (
            <span class="hero__section">{this.section}</span>
          )}
          <h1 class="hero__title">{this.heading}</h1>
          {this.subtitle && (
            <p class="hero__subtitle">{this.subtitle}</p>
          )}
          <div class="hero__actions">
            <slot />
          </div>
        </div>

        <div class="hero__layer-badge">
          <span class="hero__layer-text">Parallax Layer 01</span>
          <span class="hero__layer-sub">depth: 0.3</span>
        </div>
      </section>
    );
  }
}
