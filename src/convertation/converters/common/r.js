const { R } = require('../../../protocol/constants');
const Uint8Converter = require("../basic/uint8");

class RConverter extends Uint8Converter {
  get type() {
    return 'r';
  }

  toBytes(data) {
    return super.toBytes(R[data]);
  }

  fromBytes(bytes) {
    const number = super.fromBytes(bytes);

    const entry = Object.entries(R)
      .find(([, value]) => value === number);

    if (!entry) {
      throw new Error(`Wrong R value: ${number}`);
    }

    return entry[0];
  }
}

module.exports = RConverter;
