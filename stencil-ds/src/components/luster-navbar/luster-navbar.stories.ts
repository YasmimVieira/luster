import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Navigation/Navbar',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Barra de navegação superior com logo, links e ações. Props: `logo-title`, `logo-sub`, `active-link`.',
      },
    },
    layout: 'fullscreen',
  },
  argTypes: {
    logoTitle: { control: 'text', description: 'Título do logo' },
    logoSub: { control: 'text', description: 'Subtítulo do logo' },
    activeLink: {
      control: 'select',
      options: ['explorer', 'docs', 'updates', 'community'],
      description: 'Link ativo',
    },
  },
  args: {
    logoTitle: 'The Digital Curator',
    logoSub: 'EDITORIAL SYSTEM',
    activeLink: 'explorer',
  },
};

export default meta;
type Story = StoryObj;

const render = (args: any) => html`
  <luster-navbar
    logo-title="${args.logoTitle}"
    logo-sub="${args.logoSub}"
    active-link="${args.activeLink}"
  ></luster-navbar>
`;

export const Default: Story = { render };

export const CustomBrand: Story = {
  name: 'Custom Brand',
  args: { logoTitle: 'Luster DS', logoSub: 'DESIGN SYSTEM' },
  render,
};
