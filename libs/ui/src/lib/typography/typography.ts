// eslint-disable-next-line @nx/enforce-module-boundaries
import { CommonModule } from '@angular/common';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { Component, computed, input } from '@angular/core';

export type TypographyVariant = 'display-lg' | 'headline-lg' | 'headline-sm' | 'body-lg' | 'label-sm';
export type LusterColor = 'obsidian' | 'white' | 'neon-blue' | 'neon-purple' | 'gold' | 'default';

@Component({
  selector: 'lib-typography',
  imports: [CommonModule],
  templateUrl: './typography.html',
  styleUrl: './typography.scss',
})
export class Typography {
  variant = input<TypographyVariant>('body-lg');
  color = input<LusterColor>('default'); // Default herda a cor do pai
  customClass = input<string>('');

  classes = computed(() => {
    const variantClass = `luster-typo--${this.variant()}`;
    const colorClass = this.color() !== 'default' ? `luster-color--${this.color()}` : '';
    
    return `${variantClass} ${colorClass} ${this.customClass()}`.trim();
  });
}
