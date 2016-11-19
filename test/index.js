import fs from 'fs'
import mkdirp from 'mkdirp-promise'
import path from 'path'
import rimraf from 'rimraf'
import write from '../src'
import { test } from 'tap'

const tmp = path.join('test', 'tmp')

test('fs-writefile-promise', (tap) => {
  tap.plan(3)
  tap.afterEach((done) => rimraf(tmp, done))

  tap.test('successfully write file', (assert) => {
    assert.plan(2)

    let target = path.join(tmp, 'foo')

    mkdirp(tmp)
      .then(() => write(target, 'bar'))
      .then((filename) => fs.readFileSync(filename))
      .then((content) => {
        assert.type(content, Buffer)
        assert.equal(content.toString(), 'bar')
      })
  })

  tap.test("throw a type error when the path isn't a string", (assert) => {
    assert.plan(1)

    write(false, 'foo')
      .catch((err) => assert.match(err.message, 'path must be a string'))
  })

  tap.test('throw an error when the encoding is not supported', (assert) => {
    assert.plan(1)

    let target = path.join(tmp, 'fake', 'path')

    write(target, 'foo')
      .catch((err) => assert.equal(err.code, 'ENOENT'))
  })
})
