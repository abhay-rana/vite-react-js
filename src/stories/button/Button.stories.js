import { Button } from '~/stories/button/button';

export default {
    title: 'form/Button',
    component: Button,
};

const Template = (args) => <Button {...args}>{args.children}</Button>;

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
