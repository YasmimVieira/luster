import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Foundations/Badge',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Rótulo de status compacto. Props: `variant`, `size`, `dot`.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary', 'success', 'warning', 'error', 'beta', 'live'],
      description: 'Estilo visual',
      table: { defaultValue: { summary: 'default' } },
    },
    size: {
      control: 'select',
      options: ['sm', 'md'],
      description: 'Tamanho',
      table: { defaultValue: { summary: 'md' } },
    },
    dot: {
      control: 'boolean',
      description: 'Exibe indicador de ponto',
      table: { defaultValue: { summary: 'false' } },
    },
    label: { control: 'text', description: 'Texto do badge (slot)' },
  },
  args: {
    variant: 'default',
    size: 'md',
    dot: false,
    label: 'Badge',
  },
};

export default meta;
type Story = StoryObj;

const render = (args: any) => html`
  <luster-badge variant="${args.variant}" size="${args.size}" ?dot="${args.dot}">
    ${args.label}
  </luster-badge>
`;

export const Default: Story = {
  args: { variant: 'default', label: 'Default' },
  render,
};

export const Primary: Story = {
  args: { variant: 'primary', label: 'Primary' },
  render,
};

export const Success: Story = {
  args: { variant: 'success', label: 'Active', dot: true },
  render,
};

export const Warning: Story = {
  args: { variant: 'warning', label: 'Warning' },
  render,
};

export const Error: Story = {
  args: { variant: 'error', label: 'Error' },
  render,
};

export const Beta: Story = {
  args: { variant: 'beta', label: 'Beta' },
  render,
};

export const Live: Story = {
  args: { variant: 'live', label: 'Live', dot: true },
  render,
};

export const AllVariants: Story = {
  name: 'All Variants',
  render: () => html`
    <div style="display:flex;gap:0.75rem;flex-wrap:wrap;align-items:center;">
      <luster-badge variant="default">Default</luster-badge>
      <luster-badge variant="primary">Primary</luster-badge>
      <luster-badge variant="success" ?dot="${true}">Active</luster-badge>
      <luster-badge variant="warning">Warning</luster-badge>
      <luster-badge variant="error">Error</luster-badge>
      <luster-badge variant="beta">Beta</luster-badge>
      <luster-badge variant="live" ?dot="${true}">Live</luster-badge>
    </div>
  `,
};
