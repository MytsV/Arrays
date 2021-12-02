'use strict';

const removeElement = (array, item) => {
  const idx = array.findIndex((x) => x === item);
  if (idx >= 0) {
    array.splice(idx, 1);
  }
};

module.exports = { removeElement };
