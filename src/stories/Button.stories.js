import { action } from '@storybook/addon-actions';
import React from 'react';

import Button from '~/components/button';

export default {
    title: 'Form/Button',
    component: Button,
};

export const Default = (args) => (
    <Button {...args} onClick={action('clicked')}>
        Click me
    </Button>
);

Default.args = {
    label: 'CustomBtn',
    action: () => {
        alert('Hi,just clicked');
    },
};
