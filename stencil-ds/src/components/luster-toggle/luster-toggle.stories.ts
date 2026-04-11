import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Foundations/Toggle',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Interruptor on/off. Props: `label`, `checked`, `disabled`.',
      },
    },
  },
  argTypes: {
    label: { control: 'text', description: 'Label ao lado do toggle' },
    checked: {
      control: 'boolean',
      description: 'Estado ativado',
      table: { defaultValue: { summary: 'false' } },
    },
    disabled: {
      control: 'boolean',
      description: 'Desabilita interação',
      table: { defaultValue: { summary: 'false' } },
    },
  },
  args: {
    label: 'Enable notifications',
    checked: false,
    disabled: false,
  },
};

export default meta;
type Story = StoryObj;

const render = (args: any) => html`
  <luster-toggle
    label="${args.label}"
    ?checked="${args.checked}"
    ?disabled="${args.disabled}"
  ></luster-toggle>
`;

export const Off: Story = {
  args: { label: 'Dark mode', checked: false },
  render,
};

export const On: Story = {
  args: { label: 'Dark mode', checked: true },
  render,
};

export const Disabled: Story = {
  args: { label: 'Locked setting', disabled: true },
  render,
};

export const NoLabel: Story = {
  name: 'No Label',
  args: { label: '', checked: false },
  render,
};

export const AllStates: Story = {
  name: 'All States',
  render: () => html`
    <div style="display:flex;flex-direction:column;gap:1rem;">
      <luster-toggle label="Off"></luster-toggle>
      <luster-toggle label="On" ?checked="${true}"></luster-toggle>
      <luster-toggle label="Disabled off" ?disabled="${true}"></luster-toggle>
      <luster-toggle label="Disabled on" ?checked="${true}" ?disabled="${true}"></luster-toggle>
    </div>
  `,
};
