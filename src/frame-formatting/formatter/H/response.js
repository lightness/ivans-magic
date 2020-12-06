const Coder = require("../../../protocol/coder");
const BaseFormatter = require('../base-formatter');

class HResponse extends BaseFormatter {
  constructor() {
    super();
    this.r = Coder.R.RESPONSE;
    this.frameType = Coder.FRAME_TYPE.H;

    this.frameSchema = [
      { name: 'deviceSerialNumberPrefix', type: 'string', length: 2 },
      { name: 'deviceSerialNumber', type: 'uint16', length: 2 },
    ];
  }
}

module.exports = HResponse;
