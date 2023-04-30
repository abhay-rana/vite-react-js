import { useRef } from 'react';
import { Button } from '~/stories/button/button';

export default {
    title: 'form/Button',
    component: Button,
    tags: ['autodocs'],
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
    },
};

const Template = (args) => {
    const ref = useRef();
    return (
        <Button {...args} ref={ref}>
            {args.children}
        </Button>
    );
};

export const Default = Template.bind({});
Default.args = {
    children: 'default button',
    color: 'primary',
};
export const Primary = Template.bind({});
Primary.storyName = 'Color: Primary';
Primary.args = {
    color: 'primary',
};
export const Secondary = Template.bind({});
Secondary.storyName = 'Color: Secondary';
Secondary.args = {
    color: 'secondary',
};
export const Warning = Template.bind({});
Warning.storyName = 'Color: Warning';
Warning.args = {
    color: 'warning',
};
export const Danger = Template.bind({});
Danger.storyName = 'Color: Danger';
Danger.args = {
    color: 'danger',
};
export const Success = Template.bind({});
Success.storyName = 'Color: Success';
Success.args = {
    color: 'success',
};
export const Pill = Template.bind({});
Pill.storyName = 'Shape: Pill';
Pill.args = {
    shape: 'pill',
};
export const Brick = Template.bind({});
Brick.storyName = 'Shape: Brick';
Brick.args = {
    shape: 'brick',
};

export const ExtraSmall = Template.bind({});
ExtraSmall.storyName = 'Size: xs';
ExtraSmall.args = {
    size: 'xs',
};
export const Small = Template.bind({});
Small.storyName = 'Size: Small';
Small.args = {
    size: 'sm',
};

export const Medium = Template.bind({});
Medium.storyName = 'Size: Medium';
Medium.args = {
    size: 'md',
};
export const Large = Template.bind({});
Large.storyName = 'Size: Large';
Large.args = {
    size: 'lg',
};
