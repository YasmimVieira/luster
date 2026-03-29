import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Navbar } from './navbar';
import { CommonModule } from '@angular/common';

const meta: Meta<Navbar> = {
  title: 'Design System/Navigation/Navbar',
  component: Navbar,
  decorators: [
    moduleMetadata({
      imports: [CommonModule],
    }),
  ],
  argTypes: {
    brandName: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<Navbar>;

const mockLinks = [
  { label: 'Dashboard', path: '/dashboard' },
  { label: 'Pacientes', path: '/pacientes' },
  { label: 'Agenda', path: '/agenda' },
  { label: 'Configurações', path: '/settings' },
];

export const Desktop: Story = {
  args: {
    brandName: 'VITTACORE',
    menuItems: mockLinks,
  },
  render: (args) => ({
    props: args,
    template: `
      <luster-navbar [brandName]="brandName" [menuItems]="menuItems">
        <div right-side style="display: flex; align-items: center; gap: 12px;">
          <div style="text-align: right; line-height: 1;">
            <p style="margin: 0; font-size: 12px; font-weight: 700;">Dra. Yasmim</p>
            <span style="font-size: 10px; color: #666;">CRM 12345</span>
          </div>
          <div style="width: 36px; height: 36px; background: var(--color-primary-container); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;">
            YV
          </div>
        </div>
      </luster-navbar>
    `,
  }),
};

export const Mobile: Story = {
  args: { ...Desktop.args },
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
  },
};