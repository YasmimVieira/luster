import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Typography, TypographyVariant, LusterColor } from './typography';
import { CommonModule } from '@angular/common';

const meta: Meta<Typography> = {
  title: 'Design System/Typography',
  component: Typography,
  decorators: [
    moduleMetadata({
      imports: [CommonModule],
    }),
  ],
  // Aqui definimos os controles (Dropdowns) do Storybook
  argTypes: {
    variant: {
      control: 'select',
      options: ['display-lg', 'headline-lg', 'headline-sm', 'body-lg', 'label-sm'] as TypographyVariant[],
      description: 'Define a escala e hierarquia visual',
    },
    color: {
      control: 'select',
      options: ['default', 'obsidian', 'white', 'neon-blue', 'neon-purple', 'gold'] as LusterColor[],
      description: 'Aplica os tokens de cor do Luster',
    },
    customClass: {
      control: 'text',
      description: 'Classes adicionais de CSS',
    },
  },
};

export default meta;
type Story = StoryObj<Typography>;

// Story Principal Interativa
export const Interactive: Story = {
  args: {
    variant: 'display-lg',
    color: 'neon-blue',
    // O conteúdo dentro da tag é o ng-content
  },
  render: (args) => ({
    props: args,
    template: `
      <luster-typography [variant]="variant" [color]="color" [customClass]="customClass">
        Luster Design System
      </luster-typography>
    `,
  }),
};

// Story de Vitrine (Showcase)
export const FullScale: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 2rem; padding: 2rem; background: #050505; min-height: 100vh;">
        <luster-typography variant="display-lg" color="white">Display Large (Manrope)</luster-typography>
        <luster-typography variant="headline-lg" color="neon-blue">Headline Large Neon</luster-typography>
        <luster-typography variant="headline-sm" color="neon-purple">Headline Small Purple</luster-typography>
        <luster-typography variant="body-lg" color="white">
          Corpo de texto usando a fonte Inter para máxima legibilidade em interfaces complexas.
        </luster-typography>
        <luster-typography variant="label-sm" color="gold">
          Label de sistema (Uppercase)
        </luster-typography>
      </div>
    `,
  }),
};