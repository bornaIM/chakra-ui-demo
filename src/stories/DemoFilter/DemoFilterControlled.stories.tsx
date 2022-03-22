import { DemoFilter, DemoFilterProps } from '../../components/demo-filter/DemoFilter';
import React, { useEffect, useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Demo/DemoFilter controlled',
  component: DemoFilter,
  argTypes: {
    variant: {
      options: ['smooth', 'rounded'],
      control: { type: 'select' },
      defaultValue: 'rounded'
    },
    onChange: {
      action: 'onChange'
    }
  },
} as ComponentMeta<typeof DemoFilter>;

// https://javascript.plainenglish.io/a-guide-to-documenting-controlled-components-with-storybook-10b889c03f87
const Template: ComponentStory<typeof DemoFilter> = (args: DemoFilterProps) => {
  const [from, setFrom] = useState<number | null>(args.value.from);
  const [to, setTo] = useState<number | null>(args.value.to);

  const onFilterChange = (from: number | null, to: number | null) => {
    setFrom(from);
    setTo(to);
    if(args.onChange) {
      args.onChange(from, to);
    }
  }

  useEffect(() => {
    onFilterChange(args.value.from, args.value.to)
  }, [args.value.to, args.value.from])

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
