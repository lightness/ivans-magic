const SerialPort = require('serialport');
const readline = require('readline');
const debug = require('debug')('write');

const Coder = require('../src/coder');
const bufferChunk = require('../src/util/buffer-chunk');

const port = new SerialPort(process.env.COM_PORT, {
  baudRate: Number(process.env.BAUD_RATE),
  dataBits: Number(process.env.DATA_BITS),
  stopBits: Number(process.env.STOP_BITS),
  parity: process.env.PARITY,
});

const coder = new Coder();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

askToWrite();

function askToWrite() {
  rl.question('> ', answer => {
    const message = Buffer.from(answer, 'utf-8');
    debug('Message to send:', message);

    const encoded = coder.encode(Coder.R.REQUEST, Coder.FRAME_TYPE.V, message);
    debug('Encoded message:', encoded);

    // if (process.env.CHUNK_SIZE && process.env)

    const chunks = bufferChunk(encoded, 3);
    debug('Chunks:', chunks.length);
  
    chunks.forEach((chunk, index) => {
      setTimeout(
        () => {
          debug('Sending chunk:', chunk);
          port.write(chunk);
        },
        (index + 1) * 300,
      );
    });
    askToWrite();
  });
}
