const debug = require('debug')('serial-writer');

const Coder = require('../protocol/coder');
const selectFrameType = require('../inquirer/select-frame-type');
const pollBySchema = require('../inquirer/poll-by-schema');
const getConverter = require('../convertation/get-converter');

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
    const rValue = getConverter('r').toBytes(r);
    const frameTypeValue = getConverter('frameType').toBytes(frameType);
    debug('R:', r, rValue);
    debug('Frame type:', frameType, frameTypeValue);

    const converter = getConverter(`payload-${frameType}-${r}`);

    const data = await pollBySchema(converter.schema);
    debug('Data:', data);

    const payload = converter.toBytes(data);

    const encoded = this.coder.encode(rValue, frameTypeValue, payload);
    debug('Encoded:', encoded);

    this.serial.write(encoded);
    debug('Data sent');
  }

}

module.exports = SerialWriter;
