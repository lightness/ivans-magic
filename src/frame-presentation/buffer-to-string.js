const { chunk } = require('lodash');

const byteToString = require("./byte-to-string");

const bufferToString = (buffer) => {
  return chunk([...buffer].map(byteToString), 8)
    .map(tuple => tuple.join(' '))
    .join('\n');
}

module.exports = bufferToString;
