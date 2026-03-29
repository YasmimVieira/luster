import { Preview } from '@storybook/angular';

// Importe o arquivo SEM o underline (garanta que o arquivo foi renomeado no VS Code)
import '../src/lib/styles/typography/global.scss'; 

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;