const debug = require('debug')('serial-writer');

const Coder = require('../protocol/coder');
const pollBySchema = require('../inquirer/poll-by-schema');
const getConverter = require('../convertation/get-converter');
const getPoll = require('../inquirer/get-poll');

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
    const { r, frameType, length } = await getPoll('frame').makePoll();
    
    const rBuffer = getConverter('r').toBytes(r);
    debug('R:', r, rBuffer);

    const frameTypeBuffer = getConverter('frameType').toBytes(frameType);
    debug('Frame type:', frameType, frameTypeBuffer);

    debug('Frame length:', length);

    const converter = getConverter(`payload-${frameType}-${r}`, { length });

    const data = await pollBySchema(converter.schema);
    debug('Data:', data);

    const payload = converter.toBytes(data);

    const encoded = this.coder.encode(rBuffer, frameTypeBuffer, payload);
    debug('Encoded:', encoded);

    this.serial.write(encoded);
    debug('Data sent');
  }

}

module.exports = SerialWriter;
