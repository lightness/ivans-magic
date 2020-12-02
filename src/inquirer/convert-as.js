const padStartUpToEven = require('../util/pad-start-up-to-even');
const bufferPadStart = require('../util/buffer-pad-start');
const bufferPadEnd = require('../util/buffer-pad-end');

const convertAs = {
  'string': {
    fromBytes: (buffer) => buffer.toString('ascii'),
    toBytes: (data, len) => {
      return bufferPadEnd(Buffer.from(data, 'ascii'), len, 0x00);
    }
  },
  'datetime': {
    fromBytes: (buffer) => {
      const timestamp = parseInt(buffer.toString('hex'), 16);

      return new Date(timestamp).toISOString();
    },
    toBytes: (utc, len) => {
      const timestamp = new Date(utc).getTime();

      const dataBytes = Buffer.from(
        padStartUpToEven(timestamp.toString(16), '0'),
        'hex',
      );

      return bufferPadStart(dataBytes, len, 0x00);
    },
  }
}

module.exports = convertAs;