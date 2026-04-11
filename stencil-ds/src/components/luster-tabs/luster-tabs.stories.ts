import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Navigation/Tabs',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Navegação por abas. Props: `tabs` (JSON string ou array), `active`.',
      },
    },
  },
  argTypes: {
    tabs: {
      control: 'text',
      description: 'Array de tabs em formato JSON: `[{"label":"...","value":"..."}]`',
    },
    active: {
      control: 'text',
      description: 'Valor da aba ativa',
    },
  },
  args: {
    tabs: JSON.stringify([
      { label: 'Overview', value: 'overview' },
      { label: 'Components', value: 'components' },
      { label: 'Tokens', value: 'tokens' },
    ]),
    active: 'overview',
  },
};

export default meta;
type Story = StoryObj;

const render = (args: any) => html`
  <luster-tabs tabs="${args.tabs}" active="${args.active}"></luster-tabs>
`;

export const Default: Story = {
  render,
};

export const SecondActive: Story = {
  name: 'Second Tab Active',
  args: { active: 'components' },
  render,
};

export const ManyTabs: Story = {
  name: 'Many Tabs',
  args: {
    tabs: JSON.stringify([
      { label: 'Design', value: 'design' },
      { label: 'Code', value: 'code' },
      { label: 'Preview', value: 'preview' },
      { label: 'Changelog', value: 'changelog' },
      { label: 'Usage', value: 'usage' },
    ]),
    active: 'design',
  },
  render,
};
