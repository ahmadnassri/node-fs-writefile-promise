# fs-writefile-promise [![version][npm-version]][npm-url] [![License][license-image]][license-url] [![Build Status][travis-image]][travis-url] [![Downloads][npm-downloads]][npm-url] [![Coverage Status][codeclimate-coverage]][codeclimate-url]

[Promise] version of [fs.writefile]:

> Asynchronously writes data to a file, replacing the file if it already exists.

## Install

```bash
npm install --prod --save fs-writefile-promise
```

## API

### write(filename, data [, options])

*filename*: `String`
*data* `String` or `Buffer`
*options*: `Object`
Return: `Object` ([Promise])

When it finishes, it will be [*fulfilled*](http://promisesaplus.com/#point-26) with the file name that was written to.

When it fails, it will be [*rejected*](http://promisesaplus.com/#point-30) with an error as its first argument.

```js
write('/tmp/foo', 'bar')
  .then(function (filename) {
    console.log(filename) //=> '/tmp/foo'
  })

  .catch(function (err) {
    console.error(err)
  })
})
```

#### options

The option object will be directly passed to [fs.writefile](https://nodejs.org/api/fs.html#fs_fs_writefile_filename_data_options_callback).

---
> License: [ISC][license-url] &bull; 
> Copyright: [ahmadnassri.com](https://www.ahmadnassri.com) &bull; 
> Github: [@ahmadnassri](https://github.com/ahmadnassri) &bull; 
> Twitter: [@ahmadnassri](https://twitter.com/ahmadnassri)

[license-url]: http://choosealicense.com/licenses/isc/
[license-image]: https://img.shields.io/github/license/ahmadnassri/node-fs-writefile-promise.svg?style=flat-square

[travis-url]: https://travis-ci.org/ahmadnassri/node-fs-writefile-promise
[travis-image]: https://img.shields.io/travis/ahmadnassri/node-fs-writefile-promise.svg?style=flat-square

[npm-url]: https://www.npmjs.com/package/fs-writefile-promise
[npm-version]: https://img.shields.io/npm/v/fs-writefile-promise.svg?style=flat-square
[npm-downloads]: https://img.shields.io/npm/dm/fs-writefile-promise.svg?style=flat-square

[codeclimate-url]: https://codeclimate.com/github/ahmadnassri/node-fs-writefile-promise
[codeclimate-coverage]: https://api.codeclimate.com/v1/badges/afb06750df095dcab7cd/test_coverage?style=flat-square

[fs.writefile]: https://nodejs.org/api/fs.html#fs_fs_writefile_filename_data_options_callback
[Promise]: http://promisesaplus.com/
