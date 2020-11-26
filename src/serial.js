const SerialPort = require('serialport');
const Ready = require('@serialport/parser-ready');
const Delimiter = require('@serialport/parser-delimiter');
const Encoder = require('./encoder');

const port = new SerialPort(process.env.COM_PORT, {
  baudRate: 57600,
  dataBits: 8,
  stopBits: 1,
  parity: 'even',
});

const parser = port
  .pipe(new Ready({ delimiter: [Encoder.FS] }))
  .pipe(new Delimiter({ delimiter: [Encoder.FE] }))

parser.on('data', console.log);