import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Cards/Article Card',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Cartão editorial de artigo com suporte a variante featured. Props: `heading`, `excerpt`, `date`, `author`, `author-role`, `category`, `image-url`, `featured`.',
      },
    },
  },
  argTypes: {
    heading: { control: 'text', description: 'Título do artigo' },
    excerpt: { control: 'text', description: 'Resumo do artigo' },
    date: { control: 'text', description: 'Data de publicação' },
    author: { control: 'text', description: 'Nome do autor' },
    authorRole: { control: 'text', description: 'Cargo do autor' },
    category: { control: 'text', description: 'Categoria' },
    imageUrl: { control: 'text', description: 'URL da imagem (apenas no featured)' },
    featured: {
      control: 'boolean',
      description: 'Layout destaque com imagem',
      table: { defaultValue: { summary: 'false' } },
    },
  },
  args: {
    heading: 'The Future of Editorial Design Systems',
    excerpt: 'How modern design tokens and component libraries are reshaping the way editorial teams work.',
    date: 'Apr 11, 2026',
    author: 'Alex Curator',
    authorRole: 'Lead Editor',
    category: 'Design',
    imageUrl: '',
    featured: false,
  },
};

export default meta;
type Story = StoryObj;

const render = (args: any) => html`
  <luster-article-card
    heading="${args.heading}"
    excerpt="${args.excerpt}"
    date="${args.date}"
    author="${args.author}"
    author-role="${args.authorRole}"
    category="${args.category}"
    image-url="${args.imageUrl}"
    ?featured="${args.featured}"
  ></luster-article-card>
`;

export const Default: Story = { render };

export const Featured: Story = {
  args: { featured: true },
  render,
};

export const NoExcerpt: Story = {
  name: 'No Excerpt',
  args: { excerpt: '' },
  render,
};

export const AllCards: Story = {
  name: 'Grid of Cards',
  render: () => html`
    <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:1rem;max-width:720px;">
      <luster-article-card
        heading="The Art of Dark Mode Typography"
        excerpt="Choosing type that works in low-light editorial environments."
        date="Apr 8, 2026"
        author="Sam Viera"
        author-role="Type Director"
        category="Typography"
      ></luster-article-card>
      <luster-article-card
        heading="Designing for Scannability"
        excerpt="Readers skim. Design should help, not hinder."
        date="Apr 5, 2026"
        author="Jordan Reyes"
        author-role="UX Writer"
        category="UX"
      ></luster-article-card>
    </div>
  `,
};
