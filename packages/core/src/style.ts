import { mark, unmark } from './utils/mark';
import { RuleContainer } from './rules/rule-container';
import { __DEV__ } from './utils';

const MARK_KEY = 'Style';
let counter = 0;

export interface StyleOptions {
    document: Document;
}
export class Style {
    sheet: CSSStyleSheet | null;
    style: HTMLStyleElement;
    document: StyleOptions['document'];
    ruleContainer: RuleContainer | null;
    constructor({ document }: StyleOptions) {
        this.document = document;
        this.style = document.createElement('style');
    }
    mount() {
        this.document.head.appendChild(this.style);
        this.sheet = this.style.sheet;
        this.ruleContainer = new RuleContainer({ cssRuleContainer: this.sheet });
        __DEV__ && mark(window, MARK_KEY + ':' + counter, this);
        mark(this.style, MARK_KEY, this);
        return this;
    }
    unmount() {
        this.document.head.removeChild(this.style);
        unmark(this.style, MARK_KEY);
        return this;
    }
}
