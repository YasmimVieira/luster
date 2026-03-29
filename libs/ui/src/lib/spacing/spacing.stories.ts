import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { Spacing, SpacingSize } from './spacing';

const meta: Meta<Spacing> = {
  title: 'Design System/Spacing',
  component: Spacing,
  decorators: [
    moduleMetadata({
      imports: [CommonModule],
    }),
  ],
  argTypes: {
    size: {
      control: 'select',
      options: ['4xs', '3xs', '2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'] as SpacingSize[],
      description: 'Define o tamanho do espaçamento',
    },
    direction: {
      control: 'select',
      options: ['all', 'horizontal', 'vertical'],
      description: 'Direção do espaçamento (padding)',
    },
  },
};

export default meta;
type Story = StoryObj<Spacing>;

export const Interactive: Story = {
  args: {
    size: 'md',
    direction: 'all',
  },
  render: (args) => ({
    props: args,
    template: `
      <div style="background: #EFF4FF; display: inline-block; border-radius: 8px;">
        <luster-spacing [size]="size" [direction]="direction">
          <div style="background: #3525CD; color: #fff; padding: 1rem; border-radius: 4px; font-family: 'Inter', sans-serif; font-size: 0.875rem;">
            Conteúdo com espaçamento
          </div>
        </luster-spacing>
      </div>
    `,
  }),
};

const spacingScale = [
  { name: '4xs', value: '2px', var: '$spacing-4xs' },
  { name: '3xs', value: '4px', var: '$spacing-3xs' },
  { name: '2xs', value: '8px', var: '$spacing-2xs' },
  { name: 'xs',  value: '12px', var: '$spacing-xs' },
  { name: 'sm',  value: '16px', var: '$spacing-sm' },
  { name: 'md',  value: '24px', var: '$spacing-md' },
  { name: 'lg',  value: '32px', var: '$spacing-lg' },
  { name: 'xl',  value: '48px', var: '$spacing-xl' },
  { name: '2xl', value: '64px', var: '$spacing-2xl' },
  { name: '3xl', value: '96px', var: '$spacing-3xl' },
];

export const Showcase: Story = {
  render: () => ({
    props: { spacings: spacingScale },
    template: `
      <div style="font-family: 'Inter', sans-serif; max-width: 700px; padding: 2rem;">
        <h1 style="font-family: 'Manrope', sans-serif; font-size: 2rem; color: #050505; margin-bottom: 0.5rem;">
          Spacing Scale
        </h1>
        <p style="font-size: 0.875rem; color: #666; margin-bottom: 2rem;">
          Tokens de espaçamento consistentes para padding, margin e gap.
        </p>

        <div style="display: flex; flex-direction: column; gap: 1rem;">
          <ng-container *ngFor="let s of spacings">
            <div style="display: flex; align-items: center; gap: 1.5rem;">
              <span style="font-family: monospace; font-size: 0.75rem; color: #666; min-width: 120px; text-align: right;">
                {{ s.var }}
              </span>
              <div style="display: flex; align-items: center; gap: 0.75rem; flex: 1;">
                <div
                  [style.width]="s.value"
                  [style.height]="s.value"
                  style="background: #3525CD; border-radius: 4px; flex-shrink: 0;">
                </div>
                <div
                  [style.width]="s.value"
                  style="height: 8px; background: #D3E4FE; border-radius: 4px; flex-shrink: 0;">
                </div>
              </div>
              <span style="font-size: 0.875rem; font-weight: 700; color: #050505; min-width: 50px;">
                {{ s.value }}
              </span>
              <span style="font-size: 0.75rem; color: #999; min-width: 30px;">
                {{ s.name }}
              </span>
            </div>
          </ng-container>
        </div>
      </div>
    `,
  }),
};