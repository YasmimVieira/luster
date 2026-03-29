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
  argTypes: {
    variant: {
      control: 'select',
      options: ['display-lg', 'headline-lg', 'headline-sm', 'body-lg', 'label-sm'] as TypographyVariant[],
      description: 'Define a escala e hierarquia visual',
    },
    color: {
      control: 'select',
      // Atualizado com os tokens da sua imagem de referência
      options: [
        'default', 
        'primary', 
        'primary-container', 
        'surface-high', 
        'surface-low', 
        'error', 
        'discovery'
      ] as LusterColor[],
      description: 'Aplica os novos tokens da Color Atmosphere',
    },
    customClass: {
      control: 'text',
      description: 'Classes adicionais para ajustes finos',
    },
  },
};

export default meta;
type Story = StoryObj<Typography>;

export const Interactive: Story = {
  args: {
    variant: 'headline-lg',
    color: 'primary',
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

// Vitrine Completa (Showcase) com a nova identidade visual
export const FullScale: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 2.5rem; padding: 3rem; background: var(--color-surface-low); min-height: 100vh; font-family: 'Inter', sans-serif;">
        
        <div style="border-bottom: 1px solid var(--color-surface-high); padding-bottom: 1rem; margin-bottom: 1rem;">
          <luster-typography variant="label-sm" color="discovery">Brand Guidelines / Typography</luster-typography>
        </div>

        <section>
          <luster-typography variant="display-lg" color="primary">Display Large</luster-typography>
          <luster-typography variant="body-lg" color="primary-container">
            Utilizado para grandes títulos de impacto e heros.
          </luster-typography>
        </section>

        <section style="background: white; padding: 2rem; border-radius: 16px; box-shadow: 0 4px 24px rgba(53, 37, 205, 0.05);">
          <luster-typography variant="headline-lg" color="primary">Headline Large</luster-typography>
          <luster-typography variant="body-lg" color="default" style="color: #444; display: block; margin-top: 0.5rem;">
            Este é um exemplo de card utilizando a elevação tonal. O texto de corpo usa a cor padrão 
            para garantir legibilidade sobre o fundo branco.
          </luster-typography>
        </section>

        <section>
          <luster-typography variant="headline-sm" color="error">Cuidado: Headline com Erro</luster-typography>
          <luster-typography variant="label-sm" color="surface-high">Metadata / Info</luster-typography>
        </section>

      </div>
    `,
  }),
};