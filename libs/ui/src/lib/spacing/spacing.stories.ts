import type { Meta, StoryObj } from '@storybook/angular';
import { Spacing } from './spacing';
import { expect } from 'storybook/test';

const meta: Meta<Spacing> = {
  component: Spacing,
  title: 'Spacing',
};
export default meta;

type Story = StoryObj<Spacing>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/spacing/gi)).toBeTruthy();
  },
};
