const { magenta } = require('chalk');

const { FE } = require('../../protocol/constants');
const byteToString = require('../byte-to-string');

module.exports = () => {
  return table => {
    table.push(
      { [magenta('FE')]: [byteToString(FE), null] },
    );

    return table;
  };
};
