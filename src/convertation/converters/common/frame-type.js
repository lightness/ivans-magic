const { FRAME_TYPE } = require('../../../protocol/constants');
const Uint8Converter = require("../basic/uint8");

class FrameTypeConverter extends Uint8Converter {
  get type() {
    return 'frameType';
  }

  toBytes(data) {
    return super.toBytes(FRAME_TYPE[data]);
  }

  fromBytes(bytes) {
    const number = super.fromBytes(bytes);

    const entry = Object.entries(FRAME_TYPE)
      .find(([, value]) => value === number);

    if (!entry) {
      throw new Error(`Wrong R value: ${number}`);
    }

    return entry[0];
  }
}

module.exports = FrameTypeConverter;
