'use strict';

const removeElements = (array, ...items) => {
  for (const item of items) {
    const idx = array.findIndex((x) => x === item);
    if (idx >= 0) {
      array.splice(idx, 1);
    }
  }
};

module.exports = { removeElements };
