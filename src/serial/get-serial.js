const SerialPort = require('serialport');

const memo = new Map();

const getSerial = (comPort) => {
  if (memo.has(comPort)) {
    return memo.get(comPort);
  }

  const serial = new SerialPort(comPort, {
    baudRate: Number(process.env.BAUD_RATE),
    dataBits: Number(process.env.DATA_BITS),
    stopBits: Number(process.env.STOP_BITS),
    parity: process.env.PARITY,
  });

  memo.set(comPort, serial);

  return serial;
};

module.exports = getSerial;
