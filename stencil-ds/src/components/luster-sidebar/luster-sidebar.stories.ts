import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Navigation/Sidebar',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Sidebar de navegação lateral com itens e perfil de usuário. Props: `active`.',
      },
    },
    layout: 'fullscreen',
  },
  argTypes: {
    active: {
      control: 'select',
      options: ['foundations', 'buttons-inputs', 'navigation', 'cards'],
      description: 'Item de menu ativo',
      table: { defaultValue: { summary: 'foundations' } },
    },
  },
  args: {
    active: 'foundations',
  },
};

export default meta;
type Story = StoryObj;

const render = (args: any) => html`
  <div style="height:600px;display:flex;">
    <luster-sidebar active="${args.active}"></luster-sidebar>
  </div>
`;

export const Foundations: Story = { args: { active: 'foundations' }, render };
export const ButtonsInputs: Story = { name: 'Buttons & Inputs', args: { active: 'buttons-inputs' }, render };
export const Navigation: Story = { args: { active: 'navigation' }, render };
export const Cards: Story = { args: { active: 'cards' }, render };
