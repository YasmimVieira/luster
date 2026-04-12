import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Navigation/Modal',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Diálogo modal com overlay. Props: `open`, `heading`, `subtitle`, `confirm-label`, `cancel-label`, `size`.',
      },
    },
  },
  argTypes: {
    open: {
      control: 'boolean',
      description: 'Controla visibilidade',
      table: { defaultValue: { summary: 'false' } },
    },
    heading: { control: 'text', description: 'Título do modal' },
    subtitle: { control: 'text', description: 'Subtítulo / descrição' },
    confirmLabel: { control: 'text', description: 'Label do botão de confirmação' },
    cancelLabel: { control: 'text', description: 'Label do botão de cancelamento' },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Tamanho do modal',
      table: { defaultValue: { summary: 'md' } },
    },
  },
  args: {
    open: true,
    heading: 'Confirm action',
    subtitle: 'This action cannot be undone.',
    confirmLabel: 'Proceed',
    cancelLabel: 'Cancel',
    size: 'md',
  },
};

export default meta;
type Story = StoryObj;

const render = (args: any) => html`
  <div style="position:relative;min-height:300px;">
    <luster-modal
      ?open="${args.open}"
      heading="${args.heading}"
      subtitle="${args.subtitle}"
      confirm-label="${args.confirmLabel}"
      cancel-label="${args.cancelLabel}"
      size="${args.size}"
    >
      <p style="color:var(--dc-on-surface-variant);margin:0;">
        Are you sure you want to proceed? All unsaved changes will be lost.
      </p>
    </luster-modal>
  </div>
`;

export const Default: Story = {
  args: { open: true, heading: 'Confirm action', subtitle: 'This action cannot be undone.' },
  render,
};

export const Small: Story = {
  args: { open: true, size: 'sm', heading: 'Quick confirm', subtitle: '' },
  render,
};

export const Large: Story = {
  args: { open: true, size: 'lg', heading: 'Edit article', subtitle: 'Make your changes below.' },
  render,
};

export const DeleteConfirm: Story = {
  name: 'Delete Confirmation',
  args: {
    open: true,
    heading: 'Delete resource',
    subtitle: 'This will permanently remove the resource.',
    confirmLabel: 'Delete',
    cancelLabel: 'Keep it',
    size: 'sm',
  },
  render,
};
