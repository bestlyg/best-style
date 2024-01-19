import { mark, unmark } from '../utils';
import { BestCSSRuleList } from '../rules/rule-list';

export class BestCSSStyleSheet {
    ruleList: BestCSSRuleList;
    get cssRules() {
        return this.ruleList;
    }
    constructor(public cssStyleSheet: CSSStyleSheet) {}
    mount() {
        this.ruleList = new BestCSSRuleList(this.cssStyleSheet.cssRules);
        this.ruleList.mount();
        mark(this.cssStyleSheet, BestCSSStyleSheet.name, this);
    }
    unmount() {
        this.ruleList.unmount();
        unmark(this.cssStyleSheet, BestCSSStyleSheet.name);
    }
    insertRule(rule: string, index?: number) {
        index = this.cssStyleSheet.insertRule(rule, index);
        return index;
    }
    deleteRule(index: number) {
        this.cssStyleSheet.deleteRule(index);
    }
}
