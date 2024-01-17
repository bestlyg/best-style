export interface StyleOptions {
    document: Document;
}
export class Style {
    document: Document;
    style: HTMLStyleElement;
    constructor({ document }: StyleOptions) {
        this.document = document;
        this.style = document.createElement('style');
    }
    mount() {
        this.document.head.appendChild(this.style);
        return this;
    }
    unmount() {
        this.document.head.removeChild(this.style);
        return this;
    }
    insert(rule: string, index: number) {
        const sheet = this.style.sheet;
        sheet.insertRule(rule, index);
    }
}
