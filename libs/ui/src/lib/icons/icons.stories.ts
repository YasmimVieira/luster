import type { Meta, StoryObj } from '@storybook/angular';
import { Icons } from './icons';
import { expect } from 'storybook/test';

const meta: Meta<Icons> = {
  component: Icons,
  title: 'Icons',
};
export default meta;

type Story = StoryObj<Icons>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/icons/gi)).toBeTruthy();
  },
};
