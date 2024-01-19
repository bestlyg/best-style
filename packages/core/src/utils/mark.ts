export const randomKey = Math.random().toString(36).slice(2);

export function getMarkKey(key: string) {
    return `__BestStyle_${key}_${randomKey}`
}

export function mark<T>(node: object, key: string, value: T) {
    node[getMarkKey(key)] = value;
}

export function unmark(node: object, key: string) {
    delete node[getMarkKey(key)]
}

export function getMark<T>(node: object, key: string): T {
    return node[getMarkKey(key)]
}