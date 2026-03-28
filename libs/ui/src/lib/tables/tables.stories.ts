import type { Meta, StoryObj } from '@storybook/angular';
import { Tables } from './tables';
import { expect } from 'storybook/test';

const meta: Meta<Tables> = {
  component: Tables,
  title: 'Tables',
};
export default meta;

type Story = StoryObj<Tables>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/tables/gi)).toBeTruthy();
  },
};
