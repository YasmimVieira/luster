import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Foundations/Feature Quote',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Bloco de destaque editorial para citações. Props: `quote`, `author`, `role`, `variant`.',
      },
    },
  },
  argTypes: {
    quote: { control: 'text', description: 'Texto da citação' },
    author: { control: 'text', description: 'Nome do autor' },
    role: { control: 'text', description: 'Cargo / função do autor' },
    variant: {
      control: 'select',
      options: ['default', 'large', 'inline'],
      description: 'Estilo visual',
      table: { defaultValue: { summary: 'default' } },
    },
  },
  args: {
    quote: 'Good design is as little design as possible.',
    author: 'Dieter Rams',
    role: 'Industrial Designer',
    variant: 'default',
  },
};

export default meta;
type Story = StoryObj;

const render = (args: any) => html`
  <luster-feature-quote
    quote="${args.quote}"
    author="${args.author}"
    role="${args.role}"
    variant="${args.variant}"
  ></luster-feature-quote>
`;

export const Default: Story = { render };

export const Large: Story = {
  args: { variant: 'large' },
  render,
};

export const Inline: Story = {
  args: { variant: 'inline' },
  render,
};

export const NoAttribution: Story = {
  name: 'No Attribution',
  args: { author: '', role: '' },
  render,
};
