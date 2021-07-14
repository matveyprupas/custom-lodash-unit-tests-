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

  push(a) {
    this[this.length] = a;
    this.length += 1;
    return this;
  }

  shift() {
    for (let i = 0; i < this.length; i += 1) {
      this[i] = this[i + 1];
      if (this[i + 1] === undefined) {
        delete this[i]; // какая-то хуйня :(
        this.length -= 1;
      }
    }
    return this;
  }
}

const array = new ArrayByMatusha(1, 2);
array.push(5);

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

module.exports = {
  chunk,
};
