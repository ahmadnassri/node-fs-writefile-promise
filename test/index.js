const { readFileSync } = require('fs')
const { afterEach, test } = require('tap')
const mkdirp = require('mkdirp-promise')
const path = require('path')
const rimraf = require('rimraf')
const write = require('..')

const tmp = path.join('test', 'tmp')

afterEach(done => rimraf(tmp, done))

test('successfully write file', (assert) => {
  assert.plan(2)

  let target = path.join(tmp, 'foo')

  mkdirp(tmp)
    .then(() => write(target, 'bar'))
    .then((filename) => readFileSync(filename))
    .then((content) => {
      assert.type(content, Buffer)
      assert.equal(content.toString(), 'bar')
    })
})

test("throw a type error when the path isn't a string", assert => {
  assert.plan(1)

  write(false, 'foo')
    .catch((err) => assert.match(err.message, 'path must be a string'))
})

test('throw an error when the encoding is not supported', assert => {
  assert.plan(1)

  let target = path.join(tmp, 'fake', 'path')

  write(target, 'foo')
    .catch((err) => assert.equal(err.code, 'ENOENT'))
})
