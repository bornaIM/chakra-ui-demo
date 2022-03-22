import { DemoFilter, DemoFilterProps } from '../../components/demo-filter/DemoFilter';
import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Demo/DemoFilter controlled',
  component: DemoFilter,
  argTypes: {
    variant: {
      options: ['smooth', 'rounded'],
      control: { type: 'select' },
      defaultValue: 'rounded'
    }
  },
} as ComponentMeta<typeof DemoFilter>;

const Template: ComponentStory<typeof DemoFilter> = (args: DemoFilterProps) => {
  const [from, setFrom] = useState<number | null>(args.value.from);
  const [to, setTo] = useState<number | null>(args.value.to);

  const onFilterChange = (from: number | null, to: number | null) => {
    setFrom(from);
    setTo(to);
  }

  const remappedArgs = {...args, value: {from, to}, onChange: onFilterChange}

  return (
    <DemoFilter {...remappedArgs} />
  )
}

export const TestStory = Template.bind({});
TestStory.args = {
  value: {
    from: 10,
    to: 20
  }
};
