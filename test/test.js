const test = require('tape');
const locate = require('..');

test('test', t => {
  t.plan(3);

  locate(['x', 'README.md', 'y'], (err, result) => {
    t.error(err);

    t.equal(result, 'README.md');
  });

  locate(['x', 'y'], (err, result) => {
    t.ok(err);
  });
});

test('test with options.cwd', t => {
  t.plan(3);

  locate(['x', '../README.md', 'y'], { cwd: process.cwd() + '/lib' }, (err, result) => {
    t.error(err);

    t.equal(result, '../README.md');
  });

  locate(['x', 'y'], { cwd: process.cwd() + '/lib' }, (err, result) => {
    t.ok(err);
  });
});
