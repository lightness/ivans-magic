const debug = require('debug')('encoder');
const getCrc = require('./crc');

class Encoder {

  *escape (payload) {
    for (const byte of payload) {
      console.log('>>> byte', byte);
      if ([Encoder.FS, Encoder.FE, Encoder.ESC].includes(byte)) {
        console.log('>> ooo')
        yield Encoder.ESC;
        yield byte ^ Encoder.XM;
      } else {
        yield byte;
      }
    }
  }

  encode(r, frameType, payload) {
    debug('R:', r);
    debug('Frame type:', frameType);
    debug('Payload:', payload);

    const headerAndBody = Buffer.from([
      r,
      frameType,
      ...payload,
    ]);

    debug('Header and body:', headerAndBody);

    const crc = getCrc(headerAndBody);

    debug('Crc:', crc);

    const escapedHeaderAndBody = Buffer.from([...this.escape(headerAndBody)]);

    debug('Escaped header and body:', escapedHeaderAndBody);

    const result = Buffer.from([
      Encoder.FS,
      ...escapedHeaderAndBody,
      ...crc,
      Encoder.FE,
    ]);

    debug('Result:', result);

    return result;
  }

}

Encoder.FS = 0x02;
Encoder.FE = 0x17;
Encoder.ESC = 0x1B;
Encoder.XM = 0x0E;
Encoder.R = {
  REQUEST: 0x00,
  RESPONSE: 0x01,
};
Encoder.FRAME_TYPE = {
  V: 86,
}

module.exports = Encoder;
