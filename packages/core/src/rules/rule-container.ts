export type CSSRuleContainer = CSSStyleSheet | CSSGroupingRule;

export interface RuleContainerOptions {
    cssRuleContainer: CSSRuleContainer;
}

export class RuleContainer {
    cssRuleContainer: RuleContainerOptions['cssRuleContainer'];
    constructor({ cssRuleContainer }: RuleContainerOptions) {
        this.cssRuleContainer = cssRuleContainer;
    }
    insertRule(rule: string, index = this.cssRuleContainer.cssRules.length) {
        this.cssRuleContainer.insertRule(rule, index);
        const ruleInstance = this.cssRuleContainer.cssRules[index];
        return ruleInstance;
    }
    deleteRule(index: number) {
        const ruleInstance = this.cssRuleContainer.cssRules[index];
        if (!ruleInstance) return;
    }
    indexOf(rule: CSSRule) {
        for (let i = 0; i < this.cssRuleContainer.cssRules.length; i++) {
            if (this.cssRuleContainer.cssRules[i] === rule) return i;
        }
        return -1;
    }
}
