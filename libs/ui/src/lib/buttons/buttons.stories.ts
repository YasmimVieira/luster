import type { Meta, StoryObj } from '@storybook/angular';
import { Buttons } from './buttons';
import { expect } from 'storybook/test';

const meta: Meta<Buttons> = {
  component: Buttons,
  title: 'Buttons',
};
export default meta;

type Story = StoryObj<Buttons>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/buttons/gi)).toBeTruthy();
  },
};
