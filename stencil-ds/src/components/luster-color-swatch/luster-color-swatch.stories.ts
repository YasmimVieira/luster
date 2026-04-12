import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Foundations/Color Swatch',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Amostra de cor com nome e valor hex para documentação de tokens. Props: `color`, `name`, `hex`, `size`.',
      },
    },
  },
  argTypes: {
    color: { control: 'color', description: 'Cor (qualquer valor CSS válido)' },
    name: { control: 'text', description: 'Nome do token' },
    hex: { control: 'text', description: 'Valor hex exibido' },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Tamanho',
      table: { defaultValue: { summary: 'md' } },
    },
  },
  args: {
    color: '#a3a6ff',
    name: 'Primary',
    hex: '#A3A6FF',
    size: 'md',
  },
};

export default meta;
type Story = StoryObj;

const render = (args: any) => html`
  <luster-color-swatch
    color="${args.color}"
    name="${args.name}"
    hex="${args.hex}"
    size="${args.size}"
  ></luster-color-swatch>
`;

export const Default: Story = { render };

export const Small: Story = { args: { size: 'sm' }, render };
export const Large: Story = { args: { size: 'lg' }, render };

export const DesignTokens: Story = {
  name: 'Design Tokens Palette',
  render: () => html`
    <div style="display:flex;flex-wrap:wrap;gap:1rem;">
      <luster-color-swatch color="#a3a6ff" name="Primary" hex="#A3A6FF"></luster-color-swatch>
      <luster-color-swatch color="#6063ee" name="Primary Dim" hex="#6063EE"></luster-color-swatch>
      <luster-color-swatch color="#060e20" name="Surface" hex="#060E20"></luster-color-swatch>
      <luster-color-swatch color="#091328" name="Surface Low" hex="#091328"></luster-color-swatch>
      <luster-color-swatch color="#141f38" name="Surface High" hex="#141F38"></luster-color-swatch>
      <luster-color-swatch color="#dee5ff" name="On Surface" hex="#DEE5FF"></luster-color-swatch>
      <luster-color-swatch color="#a3aac4" name="On Surface Variant" hex="#A3AAC4"></luster-color-swatch>
      <luster-color-swatch color="#3ddc97" name="Success" hex="#3DDC97"></luster-color-swatch>
      <luster-color-swatch color="#ffbe45" name="Warning" hex="#FFBE45"></luster-color-swatch>
      <luster-color-swatch color="#ff6b6b" name="Error" hex="#FF6B6B"></luster-color-swatch>
    </div>
  `,
};
