import type { Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';
import { Style, StyleRule } from '@best-style/core/src';
import { useEffect, useMemo, useInsertionEffect, useState } from 'react';

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
        const [w, setW] = useState(1);
        const style = useMemo(() => new Style({ document }), []);
        const styleRule = useMemo(() => new StyleRule(), []);
        useInsertionEffect(() => {
            style.mount();
            styleRule.mount({
                ruleContainer: style.ruleContainer!,
                properties: { color: 'red', background: 'blue', width: 100 * w }
            });
            // style.ruleContainer.insertRule();
            // style.insertStyleRule('.a', {
            //     color: 'blue'
            // });
            // style.insertStyleRule('.b', {
            //     color: 'red'
            // });
            return () => {
                styleRule.unmount();
                style.unmount();
            };
        }, []);
        console.log(style);
        return (
            <div>
                <div className={`a b ${styleRule.selector}`}>123</div>
                <button
                    onClick={() => {
                        console.log('click', styleRule);
                        styleRule.safeUpdate({ width: 100 * (w + 1) });
                        setW(w + 1);
                    }}
                >
                    update
                </button>
            </div>
        );
    }
};
