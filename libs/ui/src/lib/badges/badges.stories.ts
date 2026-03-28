import type { Meta, StoryObj } from '@storybook/angular';
import { Badges } from './badges';
import { expect } from 'storybook/test';

const meta: Meta<Badges> = {
  component: Badges,
  title: 'Badges',
};
export default meta;

type Story = StoryObj<Badges>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/badges/gi)).toBeTruthy();
  },
};
