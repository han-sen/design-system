import type { Meta, StoryObj } from '@storybook/react-vite';
import { Alert } from './Alert';

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Alert>;

export const ExampleAlert: Story = {
  args: {
    variant: 'primary',
    children: 'Test',
  },
};

export const SuccessAlert: Story = {
  args: {
    variant: 'success',
    children: 'Success',
  },
};

export const DangerAlert: Story = {
  args: {
    variant: 'danger',
    children: 'Danger',
  },
};

export const WarningAlert: Story = {
  args: {
    variant: 'warning',
    children: 'Warning',
  },
};

export const InfoAlert: Story = {
  args: {
    variant: 'info',
    children: 'Info',
  },
};

export const WithTitleAndDescription: Story = {
  args: {
    variant: 'danger',
  },
  render: (args) => (
    <Alert {...args}>
      <Alert.Title>Open recall</Alert.Title>
      <Alert.Description>
        Contact your dealer to schedule a free repair.
      </Alert.Description>
    </Alert>
  ),
};
