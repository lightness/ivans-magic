const { trimStart } = require('lodash');
const padStartUpToEven = require('../util/pad-start-up-to-even');

const convertAs = {
  'string': {
    fromBytes: (buffer) => trimStart(buffer.toString('ascii'), '\x00'),
    toBytes: (data) => Buffer.from(data, 'ascii'),
  },
  'datetime': {
    fromBytes: (buffer) => {
      const timestamp = parseInt(buffer.toString('hex'), 16);

      // console.log('>>>', timestamp);
      return new Date(timestamp).toISOString();
    },
    toBytes: (utc) => {
      const timestamp = new Date(utc).getTime();
      // console.log('>>>>', timestamp);

      return Buffer.from(
        padStartUpToEven(timestamp.toString(16), '0'),
        'hex',
      );
    },
  }
}

module.exports = convertAs;