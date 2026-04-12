import type { Preview } from '@storybook/web-components';
import { html } from 'lit';
import { defineCustomElements } from '../loader';
import '../src/global/global.css';

defineCustomElements();

const preview: Preview = {
  globalTypes: {
    theme: {
      description: 'Global color theme',
      defaultValue: 'dark',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: [
          { value: 'dark',  icon: 'moon', title: 'Dark'  },
          { value: 'light', icon: 'sun',  title: 'Light' },
        ],
        dynamicTitle: true,
      },
    },
  },

  decorators: [
    (Story, context) => {
      const theme = (context.globals.theme as string) || 'dark';

      // Apply data-theme to the iframe root so all CSS custom properties update
      document.documentElement.setAttribute('data-theme', theme);

      const bg = theme === 'light' ? '#f5f7ff' : '#060e20';

      return html`
        <div style="
          padding: 2rem;
          background: ${bg};
          min-height: 120px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 1rem;
          transition: background 250ms ease;
        ">
          ${Story()}
        </div>
      `;
    },
  ],

  parameters: {
    backgrounds: { disable: true },
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
