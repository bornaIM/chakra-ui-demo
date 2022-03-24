import { DemoFilter, DemoFilterProps } from '../../components/demo-filter/DemoFilter';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Demo/DemoFilter controlled',
  component: DemoFilter,
  argTypes: {
    value: {
      description: 'this serves as visual representation of initial props and is not editable',
    },
    variant: {
      options: ['smooth', 'rounded'],
      control: { type: 'select' },
      defaultValue: 'rounded'
    },
    onChange: {
      action: 'onChange Action',
      table: {
        disable: true
      }
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

    // see why this is necessary
    // https://github.com/storybookjs/storybook/issues/12540
    if(args.onChange) {
      args.onChange(from, to);
    }
  }

  // useEffect(() => {
  //   onFilterChange(args.value.from, args.value.to)
  // }, [args.value.to, args.value.from])

  const remappedArgs = {...args, value: {from, to}, onChange: onFilterChange}

  return (
    <>
       <DemoFilter {...remappedArgs} />
       <pre>{`${from}_${to}`}</pre>
    </>
  )
}

export const TestStory = Template.bind({});
TestStory.args = {
  value: {
    from: 10,
    to: 20
  }
};

export const TestStoryBiggerFrom = Template.bind({});
TestStoryBiggerFrom.args = {
  value: {
    from: 30,
    to: 20
  }
};

export const TestStoryWithDivs = Template.bind({});
TestStoryWithDivs.args = {
  value: {
    from: 10,
    to: 20
  },
  showTestProps: true
};
