import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';

const meta: Meta = {
  title: 'Design System/Color Atmosphere',
  decorators: [
    moduleMetadata({
      imports: [CommonModule],
    }),
  ],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj;

const colorData = [
  { group: 'Brand Primary', name: 'primary', hex: '#3525CD', var: '$color-primary', textColor: '#fff' },
  { group: 'Brand Primary', name: 'primary-container', hex: '#4F46E5', var: '$color-primary-container', textColor: '#fff' },
  { group: 'Tonal Neutrals', name: 'surface-high', hex: '#D3E4FE', var: '$color-surface-high', textColor: '#050505' },
  { group: 'Tonal Neutrals', name: 'surface-low', hex: '#EFF4FF', var: '$color-surface-low', textColor: '#050505' },
  { group: 'Semantic Meanings', name: 'error', hex: '#BA1A1A', var: '$color-error', textColor: '#fff' },
  { group: 'Semantic Meanings', name: 'discovery', hex: '#7E3000', var: '$color-discovery', textColor: '#fff' },
];

export const Showcase: Story = {
  render: () => ({
    props: { colors: colorData },
    template: `
      <div style="font-family: 'Inter', sans-serif; max-width: 900px; padding: 2rem;">
        <h1 style="font-family: 'Manrope', sans-serif; font-size: 2rem; color: #050505; margin-bottom: 2rem;">
          Color Atmosphere
        </h1>
        
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem;">
          
          <div style="display: flex; flex-direction: column; gap: 1rem;">
            <span style="font-size: 0.75rem; font-weight: 700; color: #666; text-transform: uppercase; letter-spacing: 1px;">Brand Primary</span>
            <ng-container *ngFor="let c of colors">
              <div *ngIf="c.group === 'Brand Primary'" 
                   [style.background-color]="c.hex" 
                   [style.color]="c.textColor"
                   style="padding: 1.5rem; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.05); display: flex; flex-direction: column; justify-content: flex-end; min-height: 120px;">
                <span style="font-size: 0.75rem; opacity: 0.8; font-family: monospace;">{{ c.var }}</span>
                <span style="font-size: 1.25rem; font-weight: 700;">{{ c.hex }}</span>
              </div>
            </ng-container>
          </div>

          <div style="display: flex; flex-direction: column; gap: 1rem;">
            <span style="font-size: 0.75rem; font-weight: 700; color: #666; text-transform: uppercase; letter-spacing: 1px;">Tonal Neutrals</span>
            <ng-container *ngFor="let c of colors">
              <div *ngIf="c.group === 'Tonal Neutrals'" 
                   [style.background-color]="c.hex" 
                   [style.color]="c.textColor"
                   style="padding: 1.5rem; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.05); display: flex; flex-direction: column; justify-content: flex-end; min-height: 120px;">
                <span style="font-size: 0.75rem; opacity: 0.6; font-family: monospace;">{{ c.var }}</span>
                <span style="font-size: 1.25rem; font-weight: 700;">{{ c.hex }}</span>
              </div>
            </ng-container>
          </div>

          <div style="display: flex; flex-direction: column; gap: 1rem;">
            <span style="font-size: 0.75rem; font-weight: 700; color: #666; text-transform: uppercase; letter-spacing: 1px;">Semantic Meanings</span>
            <ng-container *ngFor="let c of colors">
              <div *ngIf="c.group === 'Semantic Meanings'" 
                   [style.background-color]="c.hex" 
                   [style.color]="c.textColor"
                   style="padding: 1.5rem; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.05); display: flex; flex-direction: column; justify-content: flex-end; min-height: 120px;">
                <span style="font-size: 0.75rem; opacity: 0.8; font-family: monospace;">{{ c.var }}</span>
                <span style="font-size: 1.25rem; font-weight: 700;">{{ c.hex }}</span>
              </div>
            </ng-container>
          </div>

        </div>
      </div>
    `,
  }),
};