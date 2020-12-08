const bufferPadEnd = require('../../util/buffer-pad-end');

class StringConverter {
  constructor() {
    this.type = 'string';
  }

  toBytes(data, length = 0) {
    return bufferPadEnd(Buffer.from(data, 'ascii'), length, 0x00);
  }

  fromBytes(bytes) {
    return bytes.toString('ascii');
  }
}

module.exports = StringConverter;
