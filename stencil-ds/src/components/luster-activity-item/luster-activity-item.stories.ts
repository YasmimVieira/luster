import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Cards/Activity Item',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Item de feed de atividade ou arquivo. Props: `label`, `description`, `time`, `variant`, `icon`, `file-size`, `downloadable`.',
      },
    },
  },
  argTypes: {
    label: { control: 'text', description: 'Título da atividade' },
    description: { control: 'text', description: 'Descrição adicional' },
    time: { control: 'text', description: 'Timestamp' },
    variant: {
      control: 'select',
      options: ['activity', 'file'],
      description: 'Tipo de item',
      table: { defaultValue: { summary: 'activity' } },
    },
    icon: {
      control: 'select',
      options: ['edit', 'sync', 'user', 'file'],
      description: 'Ícone do item',
      table: { defaultValue: { summary: 'edit' } },
    },
    fileSize: { control: 'text', description: 'Tamanho do arquivo (apenas no variant file)' },
    downloadable: {
      control: 'boolean',
      description: 'Exibe botão de download (apenas no variant file)',
      table: { defaultValue: { summary: 'false' } },
    },
  },
  args: {
    label: 'Article draft updated',
    description: 'Changes saved by Alex Curator',
    time: '2 min ago',
    variant: 'activity',
    icon: 'edit',
    fileSize: '',
    downloadable: false,
  },
};

export default meta;
type Story = StoryObj;

const render = (args: any) => html`
  <luster-activity-item
    label="${args.label}"
    description="${args.description}"
    time="${args.time}"
    variant="${args.variant}"
    icon="${args.icon}"
    file-size="${args.fileSize}"
    ?downloadable="${args.downloadable}"
  ></luster-activity-item>
`;

export const ActivityEdit: Story = {
  name: 'Activity — Edit',
  args: { label: 'Article draft updated', description: 'By Alex Curator', time: '2 min ago', icon: 'edit' },
  render,
};

export const ActivitySync: Story = {
  name: 'Activity — Sync',
  args: { label: 'Content synced to CDN', description: 'Automatic publish', time: '15 min ago', icon: 'sync' },
  render,
};

export const ActivityUser: Story = {
  name: 'Activity — User',
  args: { label: 'New collaborator added', description: 'Jordan Reyes joined the team', time: '1 hr ago', icon: 'user' },
  render,
};

export const FileDownloadable: Story = {
  name: 'File — Downloadable',
  args: {
    label: 'design-tokens.json',
    variant: 'file',
    icon: 'file',
    fileSize: '24 KB',
    time: 'Yesterday',
    downloadable: true,
  },
  render,
};

export const ActivityFeed: Story = {
  name: 'Activity Feed',
  render: () => html`
    <div style="display:flex;flex-direction:column;gap:0.25rem;width:360px;">
      <luster-activity-item label="Article draft updated" description="By Alex Curator" time="2 min ago" icon="edit"></luster-activity-item>
      <luster-activity-item label="Content synced" description="Automatic publish" time="15 min ago" icon="sync"></luster-activity-item>
      <luster-activity-item label="Jordan Reyes joined" description="New collaborator" time="1 hr ago" icon="user"></luster-activity-item>
      <luster-activity-item label="brand-guidelines.pdf" variant="file" icon="file" file-size="1.2 MB" time="Yesterday" ?downloadable="${true}"></luster-activity-item>
    </div>
  `,
};
