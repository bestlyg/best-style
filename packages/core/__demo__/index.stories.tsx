import type { Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';
import { Style } from '@best-style/core/src/style';
import { useEffect, useMemo, useInsertionEffect } from 'react';

const meta: Meta = {
    title: 'Best-Design/Style',
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    argTypes: {}
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        className: 'container',
        children: 'child'
    },
    render: function Render(args) {
        const style = useMemo(() => new Style({ document }), []);
        useInsertionEffect(() => {
            style.mount();
        }, []);
        console.log(style);
        return <div>123</div>;
    }
};
