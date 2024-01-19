import { mark, unmark } from 'src/utils';

export class BestCSSRule {
    constructor(public cssRule: CSSRule) {}
    mount() {
        mark(this.cssRule, BestCSSRule.name, this);
    }
    unmount() {
        unmark(this.cssRule, BestCSSRule.name);
    }
}
