const debug = require('debug')('serial-writer');

const Coder = require('../coder');
const frameFormatManager = require('../frame-formatting');
const selectFrameType = require('../inquirer/select-frame-type');

class SerialWriter {

  constructor(serial) {
    this.serial = serial;
    this.coder = new Coder();
  }

  async startPolling() {
    do {
      await new Promise((resolve) => setTimeout(resolve, 300));
      await this.singleWrite();
    } while (true);
  }

  async singleWrite() {
    const { r, frameType } = await selectFrameType();
    debug('R:', r);
    debug('Frame type:', frameType);

    const payload = await frameFormatManager.compose(r, frameType);
    debug('Payload:', payload);

    const encoded = this.coder.encode(r, frameType, payload);
    debug('Encoded:', encoded);

    this.serial.write(encoded);
    debug('Data sent');
  }

}

module.exports = SerialWriter;
