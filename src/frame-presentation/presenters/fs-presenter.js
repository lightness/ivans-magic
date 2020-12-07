const chalk = require('chalk');

const { FS } = require('../../protocol/constants');
const byteToString = require('../byte-to-string');

module.exports = () => {
  return table => {
    table.push(
      { [chalk.magenta('FS')]: byteToString(FS) },
    );

    return table;
  };
};
