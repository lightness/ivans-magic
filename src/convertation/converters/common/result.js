const { RESULT } = require('../../../protocol/constants');
const Uint8Converter = require("../basic/uint8");

class ResultConverter extends Uint8Converter {
  get type() {
    return 'result';
  }

  toBytes(data) {
    return super.toBytes(RESULT[data]);
  }

  fromBytes(bytes) {
    const number = super.fromBytes(bytes);

    const entry = Object.entries(RESULT)
      .find(([, value]) => value === number);

    if (!entry) {
      throw new Error(`Wrong RESULT value: ${number}`);
    }

    return entry[0];
  }
}

module.exports = ResultConverter;
