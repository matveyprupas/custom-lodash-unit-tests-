/* eslint-disable prefer-destructuring */
class ArrayByMatusha {
  constructor(...args) {
    if (args.length > 1) {
      for (let i = 0; i < args.length; i += 1) {
        this[i] = args[i];
        this.length = args.length;
      }
    } else if (args.length === 1) {
      this.length = args.length;
    } else if (args.length === 0) {
      this.length = 0;
    }
  }
}

// eslint-disable-next-line func-names
ArrayByMatusha.prototype.shift = function () {
  for (let i = 0; i < this.length; i += 1) {
    this[i] = this[i + 1];
    if (this[i + 1] === undefined) {
      delete this[i];
      this.length -= 1;
    }
  }
  return this;
};

// eslint-disable-next-line func-names
ArrayByMatusha.prototype.push = function (a) {
  this[this.length] = a;
  this.length += 1;
  return this;
};

// const array = new ArrayByMatusha(1, 2);
// array.push(6).push(5);

// console.log(array);

function chunk(arr, n) {
  const res = [];

  for (let i = 0; i < Math.trunc(arr.length / n); i += 1) {
    res[i] = new Array(n);
  }
  if (arr.length % n !== 0) {
    res[res.length] = new Array(arr.length % n);
  }

  res.forEach((el) => {
    for (let i = 0; i < el.length; i += 1) {
      // eslint-disable-next-line no-param-reassign
      el[i] = arr[0];
      arr.shift();
    }
  });
  // console.log (arr, res);
  return res;
}

// chunk(['a', 'b', 'c', 'd', 'e', 'f'], 2);
// chunk(['a', 'b', 'c', 'd'], 2);

function compact(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (!!arr[i] !== false) result.push(arr[i]);
  }
  return result;
}

function drop(arr, n) {
  if (n === 0) return arr;
  const res = [];
  const startIndex = n === undefined ? 1 : n;
  // console.log(startIndex);
  for (let i = startIndex; i < arr.length; i += 1) {
    res.push(arr[i]);
  }
  // console.log(res);
  return res;
}

// drop ([1, 2, 3, 4, 5], undefined);
// drop ([1, 2, 3, 4, 5], 0);
// drop ([1, 2, 3, 4, 5], 1);
// drop ([1, 2, 3, 4, 5], 5);
// drop ([1, 2, 3, 4, 5], 6);

module.exports = {
  chunk,
  compact,
  drop,
};
