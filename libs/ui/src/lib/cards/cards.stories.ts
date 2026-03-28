import type { Meta, StoryObj } from '@storybook/angular';
import { Cards } from './cards';
import { expect } from 'storybook/test';

const meta: Meta<Cards> = {
  component: Cards,
  title: 'Cards',
};
export default meta;

type Story = StoryObj<Cards>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/cards/gi)).toBeTruthy();
  },
};
