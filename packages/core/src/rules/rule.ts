import { mark, unmark, get } from '../utils';
import { RuleContainer } from './rule-container';

export interface RuleOptions {
    markKey: string;
}

export abstract class Rule {
    parentContainer: RuleContainer | null = null;
    cssRule: CSSRule | null = null;
    markKey: string;
    constructor({ markKey }: RuleOptions) {
        this.markKey = markKey;
    }
    mount({ ruleContainer, selector }: { selector: string; ruleContainer: RuleContainer }) {
        this.parentContainer = ruleContainer;
        this.cssRule = this.parentContainer!.insertRule(`${selector}{}`) as CSSRule;
        mark(this.cssRule, this.markKey, this);
        return this;
    }
    unmount() {
        const index = this.parentContainer.indexOf(this.cssRule);
        this.parentContainer.deleteRule(index);
        unmark(this.cssRule, this.markKey);
        return this;
    }
}
