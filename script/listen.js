const SerialPort = require('serialport');
const debug = require('debug')('listen');

const Coder = require('../src/coder');
const SerialParser = require('../src/serial/parser');

const port = new SerialPort(process.env.COM_PORT, {
  baudRate: Number(process.env.BAUD_RATE),
  dataBits: Number(process.env.DATA_BITS),
  stopBits: Number(process.env.STOP_BITS),
  parity: process.env.PARITY,
});

const coder = new Coder();

port
  .pipe(new SerialParser({
    frameStart: [Coder.FS],
    frameEnd: [Coder.FE],
  }))
  .on('data', (data) => {
    debug('Data:', data);
    const decodingResult = coder.decode(data);
    
    if (decodingResult) {
      debug('R:', decodingResult.r);
      debug('Frame type:', decodingResult.frameType);
      debug('Payload:', decodingResult.payload);
      console.log(decodingResult.payload.toString('utf8'));
    } else {
      debug('Decoding failed');
    }
  });