# fs.writeFile Promise

[![License][license-image]][license-url] [![version][npm-image]][npm-url] [![Build Status][circle-image]][circle-url]

> [Promise][] version of [fs.writeFile][]:  
> Asynchronously writes data to a file, replacing the file if it already exists.

## Install

```bash
npm install fs-writefile-promise
```

## API

<!-- lint disable no-shortcut-reference-link -->
### write(filename, data [, options])
<!-- lint enable no-shortcut-reference-link -->

- _filename_: `String`
- _data_ `String` or `Buffer`
- _options_: `Object`

Return: `Object` ([Promise][])

When it finishes, it will be [_fulfilled_](http://promisesaplus.com/#point-26) with the file name that was written to.

When it fails, it will be [_rejected_](http://promisesaplus.com/#point-30) with an error as its first argument.

```js
write('/tmp/foo', 'bar')
  .then(filename => console.log(filename)) //=> '/tmp/foo'
  .catch(err => console.error(err))
```

#### options

The option object will be directly passed to [fs.writeFile][].

---
> Author: [Ahmad Nassri](https://www.ahmadnassri.com/) &bull; 
> Github: [@ahmadnassri](https://github.com/ahmadnassri) &bull; 
> Twitter: [@AhmadNassri](https://twitter.com/AhmadNassri)

[license-url]: LICENSE
[license-image]: https://img.shields.io/github/license/ahmadnassri/node-fs-writefile-promise.svg?style=for-the-badge&logo=circleci

[circle-url]: https://circleci.com/gh/ahmadnassri/workflows/node-fs-writefile-promise
[circle-image]: https://img.shields.io/circleci/project/github/ahmadnassri/node-fs-writefile-promise/master.svg?style=for-the-badge&logo=circleci

[npm-url]: https://www.npmjs.com/package/fs-writefile-promise
[npm-image]: https://img.shields.io/npm/v/fs-writefile-promise.svg?style=for-the-badge&logo=npm

[fs.writefile]: https://nodejs.org/api/fs.html#fs_fs_writefile_file_data_options_callback
[promise]: http://promisesaplus.com/
