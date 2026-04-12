import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Navigation/Alert',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Mensagem de feedback contextual. Props: `heading`, `message`, `variant`, `dismissible`, `timestamp`.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['info', 'success', 'warning', 'error'],
      description: 'Tipo de alerta',
      table: { defaultValue: { summary: 'info' } },
    },
    heading: { control: 'text', description: 'Título do alerta' },
    message: { control: 'text', description: 'Corpo da mensagem' },
    dismissible: {
      control: 'boolean',
      description: 'Exibe botão para fechar',
      table: { defaultValue: { summary: 'true' } },
    },
    timestamp: { control: 'text', description: 'Timestamp exibido no rodapé' },
  },
  args: {
    variant: 'info',
    heading: 'Heads up',
    message: 'This is an informational message.',
    dismissible: true,
    timestamp: '',
  },
};

export default meta;
type Story = StoryObj;

const render = (args: any) => html`
  <luster-alert
    variant="${args.variant}"
    heading="${args.heading}"
    message="${args.message}"
    ?dismissible="${args.dismissible}"
    timestamp="${args.timestamp}"
  ></luster-alert>
`;

export const Info: Story = {
  args: { variant: 'info', heading: 'Information', message: 'Your changes have been saved to draft.' },
  render,
};

export const Success: Story = {
  args: { variant: 'success', heading: 'Published!', message: 'The article is now live on the platform.' },
  render,
};

export const Warning: Story = {
  args: { variant: 'warning', heading: 'Review needed', message: 'Some references could not be verified.' },
  render,
};

export const Error: Story = {
  args: { variant: 'error', heading: 'Upload failed', message: 'The file exceeds the 10 MB limit.' },
  render,
};

export const WithTimestamp: Story = {
  name: 'With Timestamp',
  args: {
    variant: 'info',
    heading: 'Scheduled',
    message: 'Publication is queued for the next release window.',
    timestamp: 'Today at 14:30',
  },
  render,
};

export const AllVariants: Story = {
  name: 'All Variants',
  render: () => html`
    <div style="display:flex;flex-direction:column;gap:0.75rem;width:480px;">
      <luster-alert variant="info" heading="Info" message="Informational feedback message."></luster-alert>
      <luster-alert variant="success" heading="Success" message="Operation completed successfully."></luster-alert>
      <luster-alert variant="warning" heading="Warning" message="Please review before continuing."></luster-alert>
      <luster-alert variant="error" heading="Error" message="Something went wrong. Try again."></luster-alert>
    </div>
  `,
};
