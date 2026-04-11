import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Foundations/Input',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Campo de texto com suporte a label, placeholder, mensagem de erro e helper text. Props: `label`, `placeholder`, `value`, `type`, `error`, `error-message`, `helper-text`, `disabled`, `readonly`.',
      },
    },
  },
  argTypes: {
    label: { control: 'text', description: 'Label do campo' },
    placeholder: { control: 'text', description: 'Placeholder' },
    value: { control: 'text', description: 'Valor inicial' },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'search'],
      description: 'Tipo do input',
      table: { defaultValue: { summary: 'text' } },
    },
    error: {
      control: 'boolean',
      description: 'Estado de erro',
      table: { defaultValue: { summary: 'false' } },
    },
    errorMessage: { control: 'text', description: 'Mensagem de erro' },
    helperText: { control: 'text', description: 'Texto de ajuda' },
    disabled: {
      control: 'boolean',
      description: 'Desabilita o campo',
      table: { defaultValue: { summary: 'false' } },
    },
    readonly: {
      control: 'boolean',
      description: 'Somente leitura',
      table: { defaultValue: { summary: 'false' } },
    },
  },
  args: {
    label: 'Email',
    placeholder: 'you@example.com',
    value: '',
    type: 'text',
    error: false,
    errorMessage: '',
    helperText: '',
    disabled: false,
    readonly: false,
  },
};

export default meta;
type Story = StoryObj;

const render = (args: any) => html`
  <luster-input
    label="${args.label}"
    placeholder="${args.placeholder}"
    value="${args.value}"
    type="${args.type}"
    ?error="${args.error}"
    error-message="${args.errorMessage}"
    helper-text="${args.helperText}"
    ?disabled="${args.disabled}"
    ?readonly="${args.readonly}"
  ></luster-input>
`;

export const Default: Story = {
  args: { label: 'Username', placeholder: 'Enter your username' },
  render,
};

export const WithHelperText: Story = {
  args: {
    label: 'Email',
    placeholder: 'you@example.com',
    helperText: 'We will never share your email.',
  },
  render,
};

export const WithError: Story = {
  args: {
    label: 'Password',
    placeholder: '••••••••',
    type: 'password',
    error: true,
    errorMessage: 'Password must be at least 8 characters.',
  },
  render,
};

export const Disabled: Story = {
  args: {
    label: 'Read-only field',
    value: 'Cannot edit this',
    disabled: true,
  },
  render,
};

export const AllStates: Story = {
  name: 'All States',
  render: () => html`
    <div style="display:flex;flex-direction:column;gap:1.5rem;width:320px;">
      <luster-input label="Default" placeholder="Enter text..."></luster-input>
      <luster-input label="With helper" placeholder="Enter email" helper-text="We will never share your email."></luster-input>
      <luster-input label="Error state" placeholder="Enter value" ?error="${true}" error-message="This field is required."></luster-input>
      <luster-input label="Disabled" value="Disabled value" ?disabled="${true}"></luster-input>
    </div>
  `,
};
