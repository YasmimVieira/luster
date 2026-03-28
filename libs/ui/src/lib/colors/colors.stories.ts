import type { Meta, StoryObj } from '@storybook/angular';
import { Colors } from './colors';
import { expect } from 'storybook/test';

const meta: Meta<Colors> = {
  component: Colors,
  title: 'Colors',
};
export default meta;

type Story = StoryObj<Colors>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/colors/gi)).toBeTruthy();
  },
};
