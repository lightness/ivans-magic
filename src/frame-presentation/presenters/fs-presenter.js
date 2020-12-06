const chalk = require('chalk');

const Coder = require('../../protocol/coder');
const byteToString = require('../byte-to-string');

module.exports = () => {
  return table => {
    table.push(
      { [chalk.magenta('FS')]: byteToString(Coder.FS) },
    );

    return table;
  };
};
