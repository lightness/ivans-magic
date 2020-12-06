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

      try {
        return new Date(timestamp).toISOString();
      } catch (error) {
        return new Date(0).toISOString();
      }
    },
    toBytes: (utc, len) => {
      const timestamp = new Date(utc).getTime();

      const dataBytes = Buffer.from(
        padStartUpToEven(timestamp.toString(16), '0'),
        'hex',
      );

      return bufferPadStart(dataBytes, len, 0x00);
    },
  },
  'uint16': {
    fromBytes: (buffer) => {
      return parseInt(buffer.toString('hex'), 16);
    },
    toBytes: (data, len) => {
      const dataBytes = Buffer.from(
        padStartUpToEven(Number(data).toString(16), '0'),
        'hex',
      );

      return bufferPadStart(dataBytes, len, 0x00);
    },
  },
  'uint8': {
    fromBytes: (buffer) => {
      return parseInt(buffer.toString('hex'), 16);
    },
    toBytes: (data, len) => {
      const dataBytes = Buffer.from(
        padStartUpToEven(Number(data).toString(16), '0'),
        'hex',
      );

      return bufferPadStart(dataBytes, len, 0x00);
    },
  }
}

module.exports = convertAs;