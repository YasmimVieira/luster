import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  // O caminho deve subir um nível (..) para sair da pasta .storybook 
  // e entrar na pasta src da sua lib
  stories: ['../src/lib/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [
    '@storybook/preset-scss', 
  ],
  framework: {
    name: '@storybook/angular',
    options: {},
  },
};

export default config;