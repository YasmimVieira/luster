import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Layout/Hero',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Banner hero de topo de página com suporte a imagem de fundo e parallax. Props: `heading`, `subtitle`, `section`, `image-url`, `parallax`.',
      },
    },
    layout: 'fullscreen',
  },
  argTypes: {
    heading: { control: 'text', description: 'Título principal' },
    subtitle: { control: 'text', description: 'Subtítulo / descrição' },
    section: { control: 'text', description: 'Rótulo de seção acima do título' },
    imageUrl: { control: 'text', description: 'URL da imagem de fundo' },
    parallax: {
      control: 'boolean',
      description: 'Ativa indicador de camada parallax',
      table: { defaultValue: { summary: 'false' } },
    },
  },
  args: {
    heading: 'Design without limits',
    subtitle: 'An editorial design system built for modern publishing teams.',
    section: 'FOUNDATIONS',
    imageUrl: '',
    parallax: false,
  },
};

export default meta;
type Story = StoryObj;

const render = (args: any) => html`
  <luster-hero
    heading="${args.heading}"
    subtitle="${args.subtitle}"
    section="${args.section}"
    image-url="${args.imageUrl}"
    ?parallax="${args.parallax}"
  >
    <luster-button variant="primary">Get Started</luster-button>
    <luster-button variant="secondary">View Docs</luster-button>
  </luster-hero>
`;

export const Default: Story = { render };

export const WithParallax: Story = {
  name: 'With Parallax Badge',
  args: { parallax: true },
  render,
};

export const MinimalHero: Story = {
  name: 'Minimal',
  args: { section: '', subtitle: '' },
  render,
};

export const FullPage: Story = {
  name: 'Full Page Layout',
  render: () => html`
    <div>
      <luster-navbar></luster-navbar>
      <luster-hero
        heading="The Digital Curator"
        subtitle="Editorial-first Web Components built for modern publishing."
        section="DESIGN SYSTEM"
        ?parallax="${true}"
      >
        <luster-button variant="primary">Explore Components</luster-button>
        <luster-button variant="secondary">Read Docs</luster-button>
      </luster-hero>
    </div>
  `,
};
