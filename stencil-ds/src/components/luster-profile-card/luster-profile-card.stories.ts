import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Cards/Profile Card',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Cartão de perfil de usuário com avatar, estatísticas e CTA. Props: `name`, `role`, `avatar`, `stat1-value`, `stat1-label`, `stat2-value`, `stat2-label`, `cta-label`.',
      },
    },
  },
  argTypes: {
    name: { control: 'text', description: 'Nome do usuário' },
    role: { control: 'text', description: 'Cargo / função' },
    avatar: { control: 'text', description: 'URL do avatar (vazio = iniciais)' },
    stat1Value: { control: 'text', description: 'Valor da estatística 1' },
    stat1Label: { control: 'text', description: 'Label da estatística 1' },
    stat2Value: { control: 'text', description: 'Valor da estatística 2' },
    stat2Label: { control: 'text', description: 'Label da estatística 2' },
    ctaLabel: { control: 'text', description: 'Label do botão CTA' },
  },
  args: {
    name: 'Alex Curator',
    role: 'Lead Editor',
    avatar: '',
    stat1Value: '142',
    stat1Label: 'Articles',
    stat2Value: '4.9k',
    stat2Label: 'Followers',
    ctaLabel: 'View Portfolio',
  },
};

export default meta;
type Story = StoryObj;

const render = (args: any) => html`
  <luster-profile-card
    name="${args.name}"
    role="${args.role}"
    avatar="${args.avatar}"
    stat1-value="${args.stat1Value}"
    stat1-label="${args.stat1Label}"
    stat2-value="${args.stat2Value}"
    stat2-label="${args.stat2Label}"
    cta-label="${args.ctaLabel}"
  ></luster-profile-card>
`;

export const Default: Story = { render };

export const NoStats: Story = {
  name: 'No Stats',
  args: { stat1Value: '', stat2Value: '' },
  render,
};

export const CustomCTA: Story = {
  name: 'Custom CTA',
  args: { ctaLabel: 'Message Alex', name: 'Alex Vieira', role: 'Design Engineer' },
  render,
};
