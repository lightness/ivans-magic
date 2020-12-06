const crc = require('crc');
const debug = require('debug')('crc');

const getCrc = (payload) => {
  debug('Payload:', payload);

  const crcString = crc.crc16xmodem(payload).toString(16).padStart(4, '0');
  const crcBuffer = Buffer.from(crcString, 'hex');

  debug('Crc:', crcBuffer);

  return crcBuffer;
}

module.exports = getCrc;
