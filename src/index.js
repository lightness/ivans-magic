const getSerial = require('./serial/get-serial');
const SerialReader = require('./serial/serial-reader');
const SerialWriter = require('./serial/serial-writer');

function run() {
  if (process.env.READ) {
    const comPort = process.env.READ_COM_PORT || process.env.COM_PORT;

    if (!comPort) {
      console.error('Either READ_COM_PORT or COM_PORT env var required');
      process.exit(0);
    }

    const serial = getSerial(comPort);

    new SerialReader(serial).listen();
  }

  if (process.env.WRITE) {
    const comPort = process.env.WRITE_COM_PORT || process.env.COM_PORT;

    if (!comPort) {
      console.error('Either WRITE_COM_PORT or COM_PORT env var required');
      process.exit(0);
    }

    const serial = getSerial(comPort);

    new SerialWriter(serial).startPolling();
  }

  if (!process.env.READ && !process.env.WRITE) {
    console.error('Use READ and/or WRITE env vars');
    process.exit(0);
  }
}

run();