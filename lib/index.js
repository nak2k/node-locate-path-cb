const { resolve } = require('path');
const { access } = require('fs');

module.exports = (paths, options, callback) => {
  if (!callback) {
    [options, callback] = [{}, options];
  }

  const {
    cwd,
  } = options;

  let iterator;

  if (cwd === undefined) {
    iterator = (next, path) =>
      () => access(path, err =>
        err ? next(err) : callback(null, path));
  } else {
    iterator = (next, path) =>
      () => access(resolve(cwd, path), err =>
        err ? next(err) : callback(null, path));
  }

  paths.reduceRight(iterator, callback)();
};
