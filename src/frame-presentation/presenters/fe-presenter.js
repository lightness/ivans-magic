const { magenta } = require('chalk');

const Coder = require('../../protocol/coder');
const byteToString = require('../byte-to-string');

module.exports = () => {
  return table => {
    table.push(
      { [magenta('FE')]: [byteToString(Coder.FE), null] },
    );

    return table;
  };
};
