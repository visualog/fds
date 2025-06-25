import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';

// 메타데이터 설정
const meta: Meta<typeof Button> = {
  title: '디자인 시스템/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg', 'icon'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// 기본 버튼
export const Default: Story = {
  args: {
    children: '기본 버튼',
    variant: 'default',
  },
};

// 파괴 버튼
export const Destructive: Story = {
  args: {
    children: '파괴 버튼',
    variant: 'destructive',
  },
};

// 아웃라인 버튼
export const Outline: Story = {
  args: {
    children: '아웃라인 버튼',
    variant: 'outline',
  },
};

// 세컨더리 버튼
export const Secondary: Story = {
  args: {
    children: '세컨더리 버튼',
    variant: 'secondary',
  },
};

// 고스트 버튼
export const Ghost: Story = {
  args: {
    children: '고스트 버튼',
    variant: 'ghost',
  },
};

// 링크 스타일 버튼
export const Link: Story = {
  args: {
    children: '링크 버튼',
    variant: 'link',
  },
};

// 크기 변형
export const Small: Story = {
  args: {
    children: '작은 버튼',
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    children: '큰 버튼',
    size: 'lg',
  },
};

// 비활성화된 버튼
export const Disabled: Story = {
  args: {
    children: '비활성화 버튼',
    disabled: true,
  },
};