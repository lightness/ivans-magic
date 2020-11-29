const debug = require('debug')('coder');
const getCrc = require('./crc');

class Coder {
  *escape (payload) {
    for (const byte of payload) {
      if ([Coder.FS, Coder.FE, Coder.ESC].includes(byte)) {
        yield Coder.ESC;
        yield byte ^ Coder.XM;
      } else {
        yield byte;
      }
    }
  }

  *unescape (payload) {
    let needXor = false;

    for (const byte of payload) {
      if (byte === Coder.ESC) {
        needXor = true;
        continue;
      }

      if (needXor) {
        yield byte ^ Coder.XM;
        needXor = false;
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

    const headerBodyAndCrc = Buffer.concat([headerAndBody, crc]);

    debug('Header, body and crc:', headerBodyAndCrc);

    const escaped = Buffer.from([...this.escape(headerBodyAndCrc)]);

    debug('Escaped header, body and crc:', escaped);

    const result = Buffer.from([
      Coder.FS,
      ...escaped,
      Coder.FE,
    ]);

    debug('Result:', result);

    return result;
  }

  decode(frame) {
    debug('Frame:', frame);

    const firstByte = frame.slice(0, 1)[0];
    if (firstByte !== Coder.FS) {
      console.error(`First byte should be ${Coder.FS.toString(16)}, but ${firstByte.toString(16)} got`);
      return null;
    }

    const lastByte = frame.slice(-1)[0];
    if (lastByte !== Coder.FE) {
      console.error(`Last byte should be ${Coder.FE.toString(16)}, but ${lastByte.toString(16)} got`);
      return null;
    }

    const escaped = frame.slice(1, -1);
    debug('Escaped:', escaped);

    const headerBodyAndCrc = Buffer.from([...this.unescape(escaped)]);
    debug('Header, body and crc:', headerBodyAndCrc);

    const headerAndBody = headerBodyAndCrc.slice(0, -2);
    debug('Header and body', headerAndBody);

    const frameCrc = headerBodyAndCrc.slice(-2);
    debug('Frame crc:', frameCrc);

    const calculatedCrc = getCrc(headerAndBody);
    debug('Calculated crc:', calculatedCrc);

    if (Buffer.compare(frameCrc, calculatedCrc) !== 0) {
      console.error('CRC mismatch');
      return null;
    }

    const r = headerAndBody[0];
    debug('R:', r);

    const frameType = headerAndBody[1];
    debug('Frame type:', frameType);

    const payload = headerAndBody.slice(2);
    debug('Payload:', payload);

    return {
      r,
      frameType,
      payload,
      crc: frameCrc,
    };
  }

}

Coder.FS = 0x02;
Coder.FE = 0x17;
Coder.ESC = 0x1B;
Coder.XM = 0x0E;
Coder.R = {
  REQUEST: 0x00,
  RESPONSE: 0x01,
};
Coder.FRAME_TYPE = {
  V: 86,
}

module.exports = Coder;
