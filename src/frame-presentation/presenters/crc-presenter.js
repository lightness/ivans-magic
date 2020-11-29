const { magenta } = require('chalk');

const bufferToString = require('../buffer-to-string');

module.exports = (crc) => {
  return table => {
    table.push(
      { [magenta('CRC')]: [bufferToString(crc), null] },
    );

    return table;
  };
};
