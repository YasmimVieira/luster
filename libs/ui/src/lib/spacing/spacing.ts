import { CommonModule } from '@angular/common';
import { Component, computed, input } from '@angular/core';

export type SpacingSize = '4xs' | '3xs' | '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';

@Component({
  selector: 'luster-spacing',
  imports: [CommonModule],
  templateUrl: './spacing.html',
  styleUrl: './spacing.scss',
})
export class Spacing {
  size = input<SpacingSize>('md');
  direction = input<'horizontal' | 'vertical' | 'all'>('all');

  classes = computed(() => {
    const sizeClass = `luster-spacing--${this.size()}`;
    const dirClass = `luster-spacing--${this.direction()}`;
    return `${sizeClass} ${dirClass}`.trim();
  });
}