import type { Meta, StoryObj } from '@storybook/angular';
import { Breadcrumbs } from './breadcrumbs';
import { expect } from 'storybook/test';

const meta: Meta<Breadcrumbs> = {
  component: Breadcrumbs,
  title: 'Breadcrumbs',
};
export default meta;

type Story = StoryObj<Breadcrumbs>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/breadcrumbs/gi)).toBeTruthy();
  },
};
