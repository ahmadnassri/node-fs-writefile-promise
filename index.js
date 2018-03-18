const { writeFile } = require('fs')

module.exports = function (filename, data, options) {
  return new Promise((resolve, reject) => {
    writeFile(filename, data, options, (err) => err === null ? resolve(filename) : reject(err))
  })
}
