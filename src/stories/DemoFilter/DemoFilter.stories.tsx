import { DemoFilter, DemoFilterProps } from '../../components/demo-filter/DemoFilter';
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Demo/DemoFilter',
  component: DemoFilter,
  argTypes: {
    variant: {
      options: ['smooth', 'rounded'],
      control: { type: 'select' },
      defaultValue: 'rounded'
    }
  },
} as ComponentMeta<typeof DemoFilter>;

const Template: ComponentStory<typeof DemoFilter> = (args: DemoFilterProps) => <DemoFilter {...args}/>

export const TestStory = Template.bind({});
TestStory.args = {
  value: {
    from: null,
    to: null
  },
  onChange: (from: number | null, to: number | null) => {}
};
