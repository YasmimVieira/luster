import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Foundations/Button',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Botão multi-variante. Suporta gradiente primary, ghost secondary, text tertiary e destructive. Props: `variant`, `size`, `loading`, `disabled`, `full-width`.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'destructive'],
      description: 'Estilo visual do botão',
      table: { defaultValue: { summary: 'primary' } },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Tamanho',
      table: { defaultValue: { summary: 'md' } },
    },
    loading: {
      control: 'boolean',
      description: 'Estado de carregamento — exibe spinner',
      table: { defaultValue: { summary: 'false' } },
    },
    disabled: {
      control: 'boolean',
      description: 'Desabilita interação',
      table: { defaultValue: { summary: 'false' } },
    },
    label: {
      control: 'text',
      description: 'Texto do botão (slot)',
    },
  },
  args: {
    variant: 'primary',
    size: 'md',
    loading: false,
    disabled: false,
    label: 'Click me',
  },
};

export default meta;
type Story = StoryObj;

const render = (args: any) => html`
  <luster-button
    variant="${args.variant}"
    size="${args.size}"
    ?loading="${args.loading}"
    ?disabled="${args.disabled}"
  >
    ${args.label}
  </luster-button>
`;

export const Primary: Story = {
  args: { variant: 'primary', label: 'Primary Action' },
  render,
};

export const Secondary: Story = {
  args: { variant: 'secondary', label: 'Secondary Style' },
  render,
};

export const Tertiary: Story = {
  args: { variant: 'tertiary', label: 'Show Link' },
  render,
};

export const Destructive: Story = {
  args: { variant: 'destructive', label: 'Delete Item' },
  render,
};

export const Loading: Story = {
  args: { variant: 'primary', loading: true, label: 'Processing' },
  render,
};

export const Disabled: Story = {
  args: { variant: 'primary', disabled: true, label: 'Unavailable' },
  render,
};

export const SmallSize: Story = {
  args: { variant: 'primary', size: 'sm', label: 'Small' },
  render,
};

export const LargeSize: Story = {
  args: { variant: 'primary', size: 'lg', label: 'Large Action' },
  render,
};

export const AllVariants: Story = {
  name: 'All Variants',
  render: () => html`
    <div style="display:flex;gap:1rem;flex-wrap:wrap;align-items:center;">
      <luster-button variant="primary">Primary</luster-button>
      <luster-button variant="secondary">Secondary</luster-button>
      <luster-button variant="tertiary">Tertiary</luster-button>
      <luster-button variant="destructive">Destructive</luster-button>
      <luster-button variant="primary" ?loading="${true}">Loading</luster-button>
      <luster-button variant="primary" ?disabled="${true}">Disabled</luster-button>
    </div>
  `,
};
