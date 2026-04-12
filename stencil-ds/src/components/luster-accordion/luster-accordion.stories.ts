import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Navigation/Accordion',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Painel expansível com badge e subtítulo. Props: `heading`, `subtitle`, `badge`, `badge-variant`, `expanded`.',
      },
    },
  },
  argTypes: {
    heading: { control: 'text', description: 'Título do accordion' },
    subtitle: { control: 'text', description: 'Subtítulo exibido sob o título' },
    badge: { control: 'text', description: 'Texto do badge (vazio = sem badge)' },
    badgeVariant: {
      control: 'select',
      options: ['default', 'primary', 'success', 'beta'],
      description: 'Variante do badge',
      table: { defaultValue: { summary: 'default' } },
    },
    expanded: {
      control: 'boolean',
      description: 'Estado inicial expandido',
      table: { defaultValue: { summary: 'false' } },
    },
  },
  args: {
    heading: 'Typography System',
    subtitle: 'Fonts, sizes, weights and line heights',
    badge: 'v1.2',
    badgeVariant: 'default',
    expanded: false,
  },
};

export default meta;
type Story = StoryObj;

const render = (args: any) => html`
  <luster-accordion
    heading="${args.heading}"
    subtitle="${args.subtitle}"
    badge="${args.badge}"
    badge-variant="${args.badgeVariant}"
    ?expanded="${args.expanded}"
  >
    <div style="color:var(--dc-on-surface-variant);font-size:0.875rem;line-height:1.6;">
      Content inside the accordion panel. Add any components or text here.
    </div>
  </luster-accordion>
`;

export const Collapsed: Story = {
  args: { expanded: false },
  render,
};

export const Expanded: Story = {
  args: { expanded: true },
  render,
};

export const WithPrimaryBadge: Story = {
  name: 'Primary Badge',
  args: { badge: 'New', badgeVariant: 'primary', expanded: true },
  render,
};

export const WithBetaBadge: Story = {
  name: 'Beta Badge',
  args: { badge: 'Beta', badgeVariant: 'beta' },
  render,
};

export const NoSubtitle: Story = {
  name: 'No Subtitle',
  args: { subtitle: '', badge: '' },
  render,
};

export const StackedGroup: Story = {
  name: 'Stacked Group',
  render: () => html`
    <div style="display:flex;flex-direction:column;gap:0.5rem;width:520px;">
      <luster-accordion heading="Typography" subtitle="Fonts and type scale" badge="v1.2" ?expanded="${true}">
        <p style="color:var(--dc-on-surface-variant);margin:0;font-size:0.875rem;">Manrope for headings, Inter for body text.</p>
      </luster-accordion>
      <luster-accordion heading="Color Tokens" subtitle="Surfaces, primaries, semantic" badge="v2.0" badge-variant="primary">
        <p style="color:var(--dc-on-surface-variant);margin:0;font-size:0.875rem;">All tokens defined as CSS custom properties on :root.</p>
      </luster-accordion>
      <luster-accordion heading="Spacing System" subtitle="Scale based on 4px grid" badge="Beta" badge-variant="beta">
        <p style="color:var(--dc-on-surface-variant);margin:0;font-size:0.875rem;">xs: 4px · sm: 8px · md: 16px · lg: 24px · xl: 40px</p>
      </luster-accordion>
    </div>
  `,
};
