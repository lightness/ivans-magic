const { magenta } = require('chalk');

const bufferToString = require('../buffer-to-string');

module.exports = (crc) => {
  const crcLE = Buffer.from(crc).reverse();

  return table => {
    table.push(
      { [magenta('CRC')]: [bufferToString(crcLE), null] },
    );

    return table;
  };
};
