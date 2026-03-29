import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { Grid, GridColumns, GridGap } from './grid';

const meta: Meta<Grid> = {
  title: 'Design System/Grid',
  component: Grid,
  decorators: [
    moduleMetadata({
      imports: [CommonModule],
    }),
  ],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    columns: {
      control: 'select',
      options: [2, 3, 4, 6, 12] as GridColumns[],
      description: 'Número de colunas do grid',
    },
    gap: {
      control: 'select',
      options: ['none', 'xs', 'sm', 'md', 'lg', 'xl'] as GridGap[],
      description: 'Espaçamento entre os itens do grid',
    },
  },
};

export default meta;
type Story = StoryObj<Grid>;

const cellStyle = 'background: #EFF4FF; border: 1px solid #D3E4FE; border-radius: 8px; padding: 1.5rem; display: flex; align-items: center; justify-content: center; font-family: Inter, sans-serif; font-size: 0.875rem; color: #3525CD; font-weight: 700; min-height: 80px;';

export const Interactive: Story = {
  args: {
    columns: 3,
    gap: 'md',
  },
  render: (args) => ({
    props: args,
    template: `
      <luster-grid [columns]="columns" [gap]="gap">
        <div style="${cellStyle}">1</div>
        <div style="${cellStyle}">2</div>
        <div style="${cellStyle}">3</div>
        <div style="${cellStyle}">4</div>
        <div style="${cellStyle}">5</div>
        <div style="${cellStyle}">6</div>
      </luster-grid>
    `,
  }),
};

export const Columns: Story = {
  render: () => ({
    template: `
      <div style="font-family: 'Inter', sans-serif; max-width: 960px; padding: 2rem;">
        <h1 style="font-family: 'Manrope', sans-serif; font-size: 2rem; color: #050505; margin-bottom: 0.5rem;">
          Grid System
        </h1>
        <p style="font-size: 0.875rem; color: #666; margin-bottom: 2rem;">
          Sistema de grid flexível baseado em CSS Grid com 12 colunas.
        </p>

        <span style="font-size: 0.75rem; font-weight: 700; color: #666; text-transform: uppercase; letter-spacing: 1px;">12 Colunas</span>
        <luster-grid [columns]="12" gap="sm" style="margin: 0.75rem 0 2rem; display: block;">
          <div style="${cellStyle}">1</div>
          <div style="${cellStyle}">2</div>
          <div style="${cellStyle}">3</div>
          <div style="${cellStyle}">4</div>
          <div style="${cellStyle}">5</div>
          <div style="${cellStyle}">6</div>
          <div style="${cellStyle}">7</div>
          <div style="${cellStyle}">8</div>
          <div style="${cellStyle}">9</div>
          <div style="${cellStyle}">10</div>
          <div style="${cellStyle}">11</div>
          <div style="${cellStyle}">12</div>
        </luster-grid>

        <span style="font-size: 0.75rem; font-weight: 700; color: #666; text-transform: uppercase; letter-spacing: 1px;">6 Colunas</span>
        <luster-grid [columns]="6" gap="sm" style="margin: 0.75rem 0 2rem; display: block;">
          <div style="${cellStyle}">1</div>
          <div style="${cellStyle}">2</div>
          <div style="${cellStyle}">3</div>
          <div style="${cellStyle}">4</div>
          <div style="${cellStyle}">5</div>
          <div style="${cellStyle}">6</div>
        </luster-grid>

        <span style="font-size: 0.75rem; font-weight: 700; color: #666; text-transform: uppercase; letter-spacing: 1px;">4 Colunas</span>
        <luster-grid [columns]="4" gap="md" style="margin: 0.75rem 0 2rem; display: block;">
          <div style="${cellStyle}">1</div>
          <div style="${cellStyle}">2</div>
          <div style="${cellStyle}">3</div>
          <div style="${cellStyle}">4</div>
        </luster-grid>

        <span style="font-size: 0.75rem; font-weight: 700; color: #666; text-transform: uppercase; letter-spacing: 1px;">3 Colunas</span>
        <luster-grid [columns]="3" gap="md" style="margin: 0.75rem 0 2rem; display: block;">
          <div style="${cellStyle}">1</div>
          <div style="${cellStyle}">2</div>
          <div style="${cellStyle}">3</div>
        </luster-grid>

        <span style="font-size: 0.75rem; font-weight: 700; color: #666; text-transform: uppercase; letter-spacing: 1px;">2 Colunas</span>
        <luster-grid [columns]="2" gap="lg" style="margin: 0.75rem 0 2rem; display: block;">
          <div style="${cellStyle}">1</div>
          <div style="${cellStyle}">2</div>
        </luster-grid>
      </div>
    `,
  }),
};