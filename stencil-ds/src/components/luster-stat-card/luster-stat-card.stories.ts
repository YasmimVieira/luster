import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Cards/Stat Card',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Cartão de componente/recurso com metadados e toggle opcional. Props: `heading`, `description`, `version`, `status`, `users`, `has-toggle`, `toggle-on`.',
      },
    },
  },
  argTypes: {
    heading: { control: 'text', description: 'Nome do componente' },
    description: { control: 'text', description: 'Descrição breve' },
    version: { control: 'text', description: 'Versão exibida como badge' },
    status: {
      control: 'select',
      options: ['active', 'beta', 'deprecated'],
      description: 'Status do componente',
      table: { defaultValue: { summary: 'active' } },
    },
    users: { control: 'text', description: 'Contagem de usuários' },
    hasToggle: {
      control: 'boolean',
      description: 'Exibe toggle no rodapé',
      table: { defaultValue: { summary: 'false' } },
    },
    toggleOn: {
      control: 'boolean',
      description: 'Estado inicial do toggle',
      table: { defaultValue: { summary: 'false' } },
    },
  },
  args: {
    heading: 'luster-button',
    description: 'Multi-variant action trigger with gradient, ghost, and text styles.',
    version: 'v1.0',
    status: 'active',
    users: '2.4k',
    hasToggle: true,
    toggleOn: true,
  },
};

export default meta;
type Story = StoryObj;

const render = (args: any) => html`
  <luster-stat-card
    heading="${args.heading}"
    description="${args.description}"
    version="${args.version}"
    status="${args.status}"
    users="${args.users}"
    ?has-toggle="${args.hasToggle}"
    ?toggle-on="${args.toggleOn}"
  ></luster-stat-card>
`;

export const Default: Story = { render };

export const BetaStatus: Story = {
  name: 'Beta Status',
  args: { heading: 'luster-hero', status: 'beta', version: 'v0.9', toggleOn: false },
  render,
};

export const Deprecated: Story = {
  args: { heading: 'dc-button', status: 'deprecated', version: 'v0.1', users: '' },
  render,
};

export const Grid: Story = {
  name: 'Card Grid',
  render: () => html`
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:1rem;max-width:780px;">
      <luster-stat-card heading="luster-button" description="Action trigger" version="v1.0" status="active" users="2.4k" ?has-toggle="${true}" ?toggle-on="${true}"></luster-stat-card>
      <luster-stat-card heading="luster-input" description="Text field" version="v1.0" status="active" users="1.9k" ?has-toggle="${true}" ?toggle-on="${true}"></luster-stat-card>
      <luster-stat-card heading="luster-hero" description="Feature banner" version="v0.9" status="beta" users="340" ?has-toggle="${true}" ?toggle-on="${false}"></luster-stat-card>
    </div>
  `,
};
