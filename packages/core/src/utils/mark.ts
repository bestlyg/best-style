export const randomKey = Math.random().toString(36).slice(2);

export function getKey(key: string) {
    return `__BestStyle_${key}_${randomKey}`
}

export function mark<T>(node: object, key: string, value: T) {
    node[getKey(key)] = value;
}

export function unmark(node: object, key: string) {
    delete node[getKey(key)]
}

export function get<T>(node: object, key: string): T {
    return node[getKey(key)]
}