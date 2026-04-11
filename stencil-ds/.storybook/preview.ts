import type { Preview } from '@storybook/web-components';
import { html } from 'lit';
import { defineCustomElements } from '../loader';
import '../src/global/global.css';

defineCustomElements();

const preview: Preview = {
  decorators: [
    (Story) => html`
      <div style="
        padding: 2rem;
        background: var(--dc-surface, #060e20);
        min-height: 120px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        gap: 1rem;
      ">
        ${Story()}
      </div>
    `,
  ],
  parameters: {
    backgrounds: {
      default: 'surface',
      values: [
        { name: 'surface',     value: '#060e20' },
        { name: 'surface-low', value: '#091328' },
        { name: 'surface-high',value: '#141f38' },
      ],
    },
    layout: 'fullscreen',
    controls: {
      matchers: {
        color: /(color|background)$/i,
        date:  /Date$/,
      },
    },
  },
};

export default preview;
