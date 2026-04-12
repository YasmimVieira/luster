import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const sampleRows = JSON.stringify([
  { name: 'luster-button',      category: 'Interaction',  status: 'active',     score: 98 },
  { name: 'luster-input',       category: 'Form',         status: 'active',     score: 95 },
  { name: 'luster-modal',       category: 'Overlay',      status: 'active',     score: 88 },
  { name: 'luster-hero',        category: 'Layout',       status: 'beta',       score: 72 },
  { name: 'luster-tabs',        category: 'Navigation',   status: 'stable',     score: 91 },
  { name: 'luster-accordion',   category: 'Disclosure',   status: 'active',     score: 85 },
  { name: 'dc-button',          category: 'Legacy',       status: 'deprecated', score: 20 },
]);

const meta: Meta = {
  title: 'Cards/Resource Table',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Tabela de registro de recursos com status, categoria e score de qualidade. Props: `rows` (JSON array).',
      },
    },
    layout: 'fullscreen',
  },
  argTypes: {
    rows: {
      control: 'text',
      description: 'Array JSON de linhas: `[{name, category, status, score}]`',
    },
  },
  args: { rows: sampleRows },
};

export default meta;
type Story = StoryObj;

const render = (args: any) => html`
  <luster-resource-table rows="${args.rows}"></luster-resource-table>
`;

export const Default: Story = { render };

export const ShortList: Story = {
  name: 'Short List',
  args: {
    rows: JSON.stringify([
      { name: 'luster-badge',    category: 'Display',  status: 'active', score: 100 },
      { name: 'luster-toggle',  category: 'Form',     status: 'active', score: 96 },
    ]),
  },
  render,
};
