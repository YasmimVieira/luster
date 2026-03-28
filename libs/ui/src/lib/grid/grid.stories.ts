import type { Meta, StoryObj } from '@storybook/angular';
import { Grid } from './grid';
import { expect } from 'storybook/test';

const meta: Meta<Grid> = {
  component: Grid,
  title: 'Grid',
};
export default meta;

type Story = StoryObj<Grid>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/grid/gi)).toBeTruthy();
  },
};
