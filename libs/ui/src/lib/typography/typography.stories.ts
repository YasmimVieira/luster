import type { Meta, StoryObj } from '@storybook/angular';
import { Typography } from './typography';
import { expect } from 'storybook/test';

const meta: Meta<Typography> = {
  component: Typography,
  title: 'Typography',
};
export default meta;

type Story = StoryObj<Typography>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/typography/gi)).toBeTruthy();
  },
};
