// tests/merge.test.ts
import { describe, it, expect } from 'vitest';
import { merge } from './app';

describe('merge()', () => {
  it('should merge three arrays correctly', () => {
    const c1 = [1, 3, 5];
    const c2 = [2, 4, 6];
    const c3 = [9, 7, 0];
    const expected = [0, 1, 2, 3, 4, 5, 6, 7, 9];

    expect(merge(c1, c2, c3)).toEqual(expected);
  });

  it('should work with empty arrays', () => {
    expect(merge([], [], [])).toEqual([]);
    expect(merge([1], [], [])).toEqual([1]);
    expect(merge([], [2], [])).toEqual([2]);
    expect(merge([], [], [5, 4])).toEqual([4, 5]);
  });

  it('should handle duplicate values', () => {
    const c1 = [1, 2];
    const c2 = [2, 3];
    const c3 = [3, 2, 1];
    const expected = [1, 1, 2, 2, 2, 3, 3];
    expect(merge(c1, c2, c3)).toEqual(expected);
  });
});
