import React from 'react'
import {Story, Meta} from '@storybook/react/types-6-0'
import HW12 from "../HW12";
import {HW12Decorator} from "./decorator/HW12Decorator";

export default {
    title: "Homeworks/HW12",
    component: HW12,
    decorators: [HW12Decorator]
} as Meta

const Template: Story = (args) => <HW12 {...args} />

export const HW12Example = Template.bind({})