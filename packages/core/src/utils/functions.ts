import hash from '@emotion/hash';

export function getRandomSelector(hashFn = hash) {
    return hashFn(performance.now().toString());
}
