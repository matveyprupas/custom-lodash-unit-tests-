const assert = require('assert');
const tasks = require('../src/01-array-methods');
it.optional = require('../extensions/it-optional');

describe('01-array-methods', () => {
  it.optional('chunk', () => {
    [
      {
        arr: ['a', 'b', 'c', 'd'],
        n: 2,
        expected: [['a', 'b'], ['c', 'd']],
      }, {
        arr: ['a', 'b', 'c', 'd'],
        n: 3,
        expected: [['a', 'b', 'c'], ['d']],
      }, {
        arr: ['a', 'b', 'c', 'd', 'e', 'f'],
        n: 2,
        expected: [['a', 'b'], ['c', 'd'], ['e', 'f']],
      }, {
        arr: ['a', 'b', 'c', 'd', 'e', 'f'],
        n: 4,
        expected: [['a', 'b', 'c', 'd'], ['e', 'f']],
      },
    ].forEach((data) => {
      const actual = tasks.chunk(data.arr, data.n);
      assert.deepEqual(
        data.expected,
        actual,
      );
    });
  });

  it.optional('compact', () => {
    [
      {
        arr: ['1', 2, false, '', null, undefined, 0, "0", 153, NaN],
        expected: ['1', 2, "0", 153],
      },
    ].forEach((data) => {
      const actual = tasks.compact(data.arr);
      assert.deepEqual(
        data.expected,
        actual,
      );
    });
  });

  it.optional('drop', () => {
    [
      {
        arr: [1, 2, 3, 4, 5],
        n: undefined,
        expected: [2, 3, 4, 5],
      }, {
        arr: [1, 2, 3, 4, 5],
        n: 0,
        expected: [1, 2, 3, 4, 5],
      }, {
        arr: [1, 2, 3, 4, 5],
        n: 1,
        expected: [2, 3, 4, 5],
      }, {
        arr: [1, 2, 3, 4, 5],
        n: 2,
        expected: [3, 4, 5],
      }, {
        arr: [1, 2, 3, 4, 5],
        n: 3,
        expected: [4, 5],
      }, {
        arr: [1, 2, 3, 4, 5],
        n: 4,
        expected: [5],
      }, {
        arr: [1, 2, 3, 4, 5],
        n: 5,
        expected: [],
      }, {
        arr: [1, 2, 3, 4, 5],
        n: 6,
        expected: [],
      },
    ].forEach((data) => {
      const actual = tasks.drop(data.arr, data.n);
      assert.deepEqual(
        data.expected,
        actual,
      );
    });
  });
});