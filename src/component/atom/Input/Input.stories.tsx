import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'atom/Input',
  component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Primary: Story = {
  args: {
    children: (
      <input
        className='rounded-md border-2 border-gray-400 px-2 py-1 focus:outline-none'
        placeholder='input'
      />
    ),
  },
};

export const Border: Story = {
  args: {
    children: (
      <input
        className='border-b-2 border-b-gray-400 px-2 py-1 focus:outline-none'
        placeholder='input'
      />
    ),
  },
};
