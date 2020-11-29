const chalk = require('chalk');

const Coder = require('../../coder');
const byteToString = require('../byte-to-string');

module.exports = () => {
  return table => {
    table.push(
      { [chalk.magenta('FS')]: byteToString(Coder.FS) },
    );

    return table;
  };
};
