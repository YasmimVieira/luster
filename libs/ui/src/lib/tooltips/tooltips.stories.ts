import type { Meta, StoryObj } from '@storybook/angular';
import { Tooltips } from './tooltips';
import { expect } from 'storybook/test';

const meta: Meta<Tooltips> = {
  component: Tooltips,
  title: 'Tooltips',
};
export default meta;

type Story = StoryObj<Tooltips>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/tooltips/gi)).toBeTruthy();
  },
};
