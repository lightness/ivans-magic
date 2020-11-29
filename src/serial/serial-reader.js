const debug = require('debug')('serial-reader');

const Coder = require('../coder');
const SerialParser = require('./parser');
const frameFormatManager = require('../frame-formatting');

class SerialReader {

  constructor(serial) {
    this.serial = serial;
    this.serialParser = new SerialParser({
      frameStart: [Coder.FS],
      frameEnd: [Coder.FE],
    });
    this.coder = new Coder();
  }
  
  listen() {
    this.serial
      .pipe(this.serialParser)
      .on('data', this.onData.bind(this));
  }

  onData(data) {
    debug('Data:', data);
    const decodingResult = this.coder.decode(data);
    
    if (!decodingResult) {
      debug('Decoding failed');
      return;
    }

    const { r, frameType, payload } = decodingResult;
    debug('R:', r);
    debug('Frame type:', frameType);
    debug('Payload:', payload);
    
    const decomposedPayload = frameFormatManager.decompose(r, frameType, payload);
    debug('Decomposed payload:', decomposedPayload);
  }

}

module.exports = SerialReader;
