'use strict';

const unique = (array) => {
  const res = [];
  array.forEach((x) => {
    if (!res.includes(x)) {
      res.push(x);
    }
  });
  return res;
};

module.exports = { unique };
