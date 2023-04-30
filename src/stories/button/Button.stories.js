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
};
export const Primary = Template.bind({});
Primary.args = {
    color: 'primary',
    label: 'Button',
};
// Color Danger
export const Danger = Template.bind({});

Danger.args = {
    color: 'danger',
    label: 'Button',
};
