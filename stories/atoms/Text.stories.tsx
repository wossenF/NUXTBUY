import type { Meta, StoryObj } from '@storybook/vue3';
import { h } from 'vue';
import MyText from '@/components/atoms/Text.vue';

const meta: Meta<typeof MyText> = {
    title: 'Atoms/Text',
    component: MyText,
    tags: ['autodocs'],
    argTypes: {
        fontWeight: {
            control: {
                type: 'select',
                options: ['normal', 'bold', 'lighter'],
            },
            description: 'The font weight of the text',
        },
        fontSize: {
            control: {
                type: 'text', 
            },
            description: 'The font size of the text',
        },
    },
    parameters: {
        docs: {
            description: {
                story: 'You can customize the font weight and font size of the text component. The default font weight is `normal` and the default font size is `16px`.',
            },
        },
    },
};

export default meta;

type Story = StoryObj<typeof MyText>;

const renderText = (args: any) => ({
    components: { MyText },
    setup() {
        return { args };
    },
    render() {
        return h(MyText, {
            fontWeight: args.fontWeight,
            fontSize: args.fontSize,
        }, {
            default: () => 'Sample Text',
        });
    },
});

export const Default: Story = {
    render: renderText,
    args: {
        fontWeight: 'normal',
        fontSize: '16px',
    },
};

export const BoldText: Story = {
    render: renderText,
    args: {
        fontWeight: 'bold',
        fontSize: '20px',
    },
};

export const LighterText: Story = {
    render: renderText,
    args: {
        fontWeight: 'lighter',
        fontSize: '14px',
    },
};

export const CustomSizeText: Story = {
    render: renderText,
    args: {
        fontWeight: 'normal',
        fontSize: '24px',
    },
};