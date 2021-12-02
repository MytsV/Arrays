'use strict';

const difference = (array1, array2) => {
  const diff = [];
  array1.forEach((x) => {
    if (!array2.includes(x)) {
      diff.push(x);
    }
  });
  return diff;
};

module.exports = { difference };
