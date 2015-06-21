/* global afterEach, describe, it */

'use strict'

var rimraf = require('rimraf')
var read = require('fs-readfile-promise')
var mkdirp = require('mkdirp-promise')
var path = require('path')
var write = require('..')

require('should')

var tmp = path.join('test', 'tmp')
var target = path.join(tmp, 'foo')

afterEach(function (done) {
  rimraf(tmp, done)
})

describe('node module', function () {
  it('should successfully write file', function (done) {

    mkdirp(tmp)
      .then(function () {
        return write(target, 'bar')
      })
      .then(read)
      .then(function (content) {
        content.should.be.a.Buffer
        content.toString().should.eql('bar')

        done()
      })
  })

  it('should throw a type error when the path isn\'t a string', function (done) {
    write(false, 'foo')
      .catch(function (err) {
        err.message.should.equal('path must be a string')

        done()
      })
  })

  it('should throw an error when the encoding is not supported', function (done) {
    write(path.join(tmp, 'fake', 'path'), 'foo')
      .catch(function (err) {
        err.code.should.equal('ENOENT')

        done()
      })
  })
})
