const assert = require('assert');
const tasks = require('../src/01-array-methods');
it.optional = require('../extensions/it-optional');

describe('01-array-methods', () => {
  // it.optional('chunk', () => {
  //   assert.equal(tasks.chunk(['a', 'b', 'c', 'd'], 2), [['a', 'b'], ['c', 'd']]);
  //   assert.equal(tasks.chunk(['a', 'b', 'c', 'd'], 3), [['a', 'b', 'c'], ['d']]);
  // });

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
});