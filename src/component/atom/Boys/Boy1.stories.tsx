import type { Meta, StoryObj } from '@storybook/react';
import { Boy1 } from './Boy1';

const meta: Meta<typeof Boy1> = {
  title: 'atom/Boy1',
  component: Boy1,
};

export default meta;
type Story = StoryObj<typeof Boy1>;

export const BoyOneFront: Story = {
  args: {
    children: (
      <>
        <h3 className='text-center'>boy1-front</h3>
        <div className='boy1-front relative mx-auto h-[140px] w-[140px]'></div>
      </>
    ),
  },
};

export const FrontWorking1: Story = {
  args: {
    children: (
      <>
        <h3 className='text-center'>boy1-front-walking1</h3>
        <div className=' boy1-front-walking1 relative mx-auto h-[100px] w-[100px]'></div>
      </>
    ),
  },
};

export const FrontWorking2: Story = {
  args: {
    children: (
      <>
        <h3 className='text-center'>boy1-front-walking2</h3>
        <div className='boy1-front-walking2 relative mx-auto h-[140px] w-[140px]'></div>
      </>
    ),
  },
};

export const Left: Story = {
  args: {
    children: (
      <>
        <h3 className='text-center'>boy1-left</h3>
        <div className='boy1-left relative mx-auto h-[140px] w-[140px]'></div>
      </>
    ),
  },
};

export const LeftWalking1: Story = {
  args: {
    children: (
      <>
        <h3 className='text-center'>boy1-left-walking1</h3>
        <div className='boy1-left-walking1 relative mx-auto h-[140px] w-[140px]'></div>
      </>
    ),
  },
};

export const Right: Story = {
  args: {
    children: (
      <>
        <h3 className='text-center'>boy1-right</h3>
        <div className='boy1-right relative mx-auto h-[140px] w-[140px]'></div>
      </>
    ),
  },
};

export const RightWalking1: Story = {
  args: {
    children: (
      <>
        <h3 className='text-center'>boy1-right-walking1</h3>
        <div className='boy1-right-walking1 relative mx-auto h-[140px] w-[140px]'></div>
      </>
    ),
  },
};

export const BoyOneBack: Story = {
  args: {
    children: (
      <>
        <h3 className='text-center'>boy1-back</h3>
        <div className='boy1-back relative mx-auto h-[140px] w-[140px]'></div>
      </>
    ),
  },
};

export const BackWorking1: Story = {
  args: {
    children: (
      <>
        <h3 className='text-center'>boy1-back-walking1</h3>
        <div className=' boy1-back-walking1 relative mx-auto h-[100px] w-[100px]'></div>
      </>
    ),
  },
};

export const BackWorking2: Story = {
  args: {
    children: (
      <>
        <h3 className='text-center'>boy1-back-walking2</h3>
        <div className='boy1-back-walking2 relative mx-auto h-[140px] w-[140px]'></div>
      </>
    ),
  },
};
