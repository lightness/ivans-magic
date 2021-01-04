const { magenta, red } = require('chalk');

const getConverter = require('../../convertation/get-converter');
const DeciPvm = require('../../protocol/deci-pvm');
const bufferToString = require('../buffer-to-string');

module.exports = (payload, prefix) => {
  if (payload.length !== 9) {
    throw new Error('DeciPVM value should have 9 bytes length');
  }

  const converter = getConverter('deciPVM');
  const values = converter.fromBytes(payload);
  const deciPvm = new DeciPvm(values);
  const deciPvmString = deciPvm.toString();

  return (table) => {
    table.push(
      { [magenta(prefix)]: [bufferToString(payload), red(deciPvmString)] },
    );

    return table;
  };
};
