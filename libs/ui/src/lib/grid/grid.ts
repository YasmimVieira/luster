import { CommonModule } from '@angular/common';
import { Component, computed, input } from '@angular/core';

export type GridColumns = 2 | 3 | 4 | 6 | 12;
export type GridGap = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';

@Component({
  selector: 'luster-grid',
  imports: [CommonModule],
  templateUrl: './grid.html',
  styleUrl: './grid.scss',
})
export class Grid {
  columns = input<GridColumns>(12);
  gap = input<GridGap>('md');

  classes = computed(() => {
    const colClass = `luster-grid--cols-${this.columns()}`;
    const gapClass = `luster-grid--gap-${this.gap()}`;
    return `luster-grid ${colClass} ${gapClass}`.trim();
  });
}