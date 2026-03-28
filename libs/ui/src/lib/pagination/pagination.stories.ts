import type { Meta, StoryObj } from '@storybook/angular';
import { Pagination } from './pagination';
import { expect } from 'storybook/test';

const meta: Meta<Pagination> = {
  component: Pagination,
  title: 'Pagination',
};
export default meta;

type Story = StoryObj<Pagination>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/pagination/gi)).toBeTruthy();
  },
};
