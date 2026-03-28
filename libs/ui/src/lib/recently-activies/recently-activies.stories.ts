import type { Meta, StoryObj } from '@storybook/angular';
import { RecentlyActivies } from './recently-activies';
import { expect } from 'storybook/test';

const meta: Meta<RecentlyActivies> = {
  component: RecentlyActivies,
  title: 'RecentlyActivies',
};
export default meta;

type Story = StoryObj<RecentlyActivies>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/recently-activies/gi)).toBeTruthy();
  },
};
