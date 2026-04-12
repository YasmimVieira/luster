import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Foundations/Card',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Contêiner de conteúdo com variantes visuais. Props: `variant`, `padding`, `hoverable`.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'elevated', 'glass', 'feature'],
      description: 'Estilo visual',
      table: { defaultValue: { summary: 'default' } },
    },
    padding: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg'],
      description: 'Espaçamento interno',
      table: { defaultValue: { summary: 'md' } },
    },
    hoverable: {
      control: 'boolean',
      description: 'Efeito ao passar o mouse',
      table: { defaultValue: { summary: 'false' } },
    },
  },
  args: {
    variant: 'default',
    padding: 'md',
    hoverable: false,
  },
};

export default meta;
type Story = StoryObj;

const render = (args: any) => html`
  <luster-card variant="${args.variant}" padding="${args.padding}" ?hoverable="${args.hoverable}">
    <div style="color:var(--dc-on-surface);">
      <strong>Card heading</strong>
      <p style="margin:0.5rem 0 0;color:var(--dc-on-surface-variant);font-size:0.875rem;">
        Some content inside the card goes here.
      </p>
    </div>
  </luster-card>
`;

export const Default: Story = { args: { variant: 'default' }, render };
export const Elevated: Story = { args: { variant: 'elevated' }, render };
export const Glass: Story = { args: { variant: 'glass' }, render };
export const Feature: Story = { args: { variant: 'feature' }, render };
export const Hoverable: Story = { args: { variant: 'elevated', hoverable: true }, render };

export const AllVariants: Story = {
  name: 'All Variants',
  render: () => html`
    <div style="display:flex;gap:1rem;flex-wrap:wrap;">
      ${(['default', 'elevated', 'glass', 'feature'] as const).map(
        (v) => html`
          <luster-card variant="${v}" padding="md">
            <div style="color:var(--dc-on-surface);min-width:140px;">
              <strong style="font-size:0.8rem;text-transform:uppercase;letter-spacing:0.05em;">${v}</strong>
              <p style="margin:0.5rem 0 0;color:var(--dc-on-surface-variant);font-size:0.8rem;">Sample content</p>
            </div>
          </luster-card>
        `
      )}
    </div>
  `,
};
