// import { Card } from '~/stories/card';
import Card from '~/stories/card/card';
import { options } from '~/stories/card/constant';

export default {
    title: 'Card',
    component: Card,
    arg: {
        children: 'work for every card',
    },
    argTypes: {
        label: {
            controls: {
                type: 'text',
            },
            defaultValue: 'button text',
        },
        color: {
            description: '**options**',
            table: {
                type: {
                    summary: options.colors
                        .map((option) => `'${option}'`)
                        .join('|'),
                },
            },
            control: {
                type: 'select',
                options: options.colors,
            },
        },
        sizes: {
            description: '**options**',
            table: {
                type: {
                    summary: options.sizes
                        .map((option) => `'${option}'`)
                        .join('|'),
                },
            },
            control: {
                type: 'select',
                options: options.sizes,
            },
        },
        primary: {
            control: 'radio',
            options: [true, false],
        },
        size: {
            control: 'select',
            options: ['small', 'medium', 'large'],
        },
    },
};

const Template = (args) => <Card {...args} />;

const ListTemplate = ({ items, ...args }) =>
    items.map((item, index) => <Card key={index} {...args} {...item} />);

export const Default = Template.bind({});
export const Colors = Template.bind({});
Colors.args = {
    primary: true,
};
export const Sizes = ListTemplate.bind({});
Sizes.args = {
    items: options.sizes.map((color) => ({ color })),
};
