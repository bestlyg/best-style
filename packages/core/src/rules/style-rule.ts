import { CSSProperties, getRandomSelector, transformStyleValue } from '../utils';
import { Rule } from './rule';
import { RuleContainer } from './rule-container';

export interface StyleRuleOptions {
    selector?: string;
    prefix?: string;
}

export class StyleRule extends Rule {
    cssRule: CSSStyleRule | null = null;
    selector: string;
    prefix: string;
    constructor({ prefix, selector }: StyleRuleOptions = {}) {
        super({ markKey: 'StyleRule' });
        this.prefix = prefix || 'best-style';
        this.selector = selector ?? `${this.prefix}-${getRandomSelector()}`;
    }
    mount({
        parent,
        properties = {}
    }: {
        parent: RuleContainer;
        properties?: CSSProperties;
    }) {
        return super
            .mount({
                ruleContainer,
                selector: `.${this.selector}`
            })
            .safetyUpdate(properties);
    }
    safetyUpdate(properties?: CSSProperties) {
        for (const key of Object.keys(properties)) {
            properties[key] = transformStyleValue(key, properties[key]);
        }
        return this.update(properties);
    }
    update(properties?: CSSProperties) {
        Object.assign(this.cssRule.style, properties);
        return this;
    }
}
