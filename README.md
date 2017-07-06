# locate-path-cb

locate-path callback version.

## Installation

```
npm i locate-path-cb -S
```

## Usage

``` javascript
const locatePath = require('locate-path-cb');

const files = [ ... ];

locate(files, { cwd: 'path/to/dir' }, (err, result) => {
  // result => 'existing-file'
});
```

## locatePath(paths, [options,] callback)

- `paths`
- `options.cwd`
- `callback(err, result)`

## License

MIT
