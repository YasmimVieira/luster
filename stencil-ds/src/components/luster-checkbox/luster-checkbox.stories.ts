import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Foundations/Checkbox',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Caixa de seleção com suporte a estado indeterminado. Props: `label`, `checked`, `disabled`, `indeterminate`, `value`.',
      },
    },
  },
  argTypes: {
    label: { control: 'text', description: 'Label do checkbox' },
    checked: {
      control: 'boolean',
      description: 'Estado marcado',
      table: { defaultValue: { summary: 'false' } },
    },
    disabled: {
      control: 'boolean',
      description: 'Desabilita interação',
      table: { defaultValue: { summary: 'false' } },
    },
    indeterminate: {
      control: 'boolean',
      description: 'Estado indeterminado',
      table: { defaultValue: { summary: 'false' } },
    },
  },
  args: {
    label: 'Accept terms',
    checked: false,
    disabled: false,
    indeterminate: false,
  },
};

export default meta;
type Story = StoryObj;

const render = (args: any) => html`
  <luster-checkbox
    label="${args.label}"
    ?checked="${args.checked}"
    ?disabled="${args.disabled}"
    ?indeterminate="${args.indeterminate}"
  ></luster-checkbox>
`;

export const Default: Story = {
  args: { label: 'Accept terms and conditions', checked: false },
  render,
};

export const Checked: Story = {
  args: { label: 'Option selected', checked: true },
  render,
};

export const Indeterminate: Story = {
  args: { label: 'Partial selection', indeterminate: true },
  render,
};

export const Disabled: Story = {
  args: { label: 'Unavailable option', disabled: true },
  render,
};

export const DisabledChecked: Story = {
  name: 'Disabled Checked',
  args: { label: 'Locked selection', checked: true, disabled: true },
  render,
};

export const AllStates: Story = {
  name: 'All States',
  render: () => html`
    <div style="display:flex;flex-direction:column;gap:1rem;">
      <luster-checkbox label="Unchecked"></luster-checkbox>
      <luster-checkbox label="Checked" ?checked="${true}"></luster-checkbox>
      <luster-checkbox label="Indeterminate" ?indeterminate="${true}"></luster-checkbox>
      <luster-checkbox label="Disabled" ?disabled="${true}"></luster-checkbox>
      <luster-checkbox label="Disabled checked" ?checked="${true}" ?disabled="${true}"></luster-checkbox>
    </div>
  `,
};
