import type { Meta, StoryObj } from '@storybook/angular';
import { Graphics } from './graphics';
import { expect } from 'storybook/test';

const meta: Meta<Graphics> = {
  component: Graphics,
  title: 'Graphics',
};
export default meta;

type Story = StoryObj<Graphics>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/graphics/gi)).toBeTruthy();
  },
};
