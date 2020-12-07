const { R, FRAME_TYPE } = require("../../../protocol/constants");
const BaseFormatter = require('../base-formatter');

class UpperHResponse extends BaseFormatter {
  constructor() {
    super();
    this.r = R.RESPONSE;
    this.frameType = FRAME_TYPE.H;

    this.frameSchema = [
      { name: 'deviceSerialNumberPrefix', type: 'string', length: 2 },
      { name: 'deviceSerialNumber', type: 'uint16', length: 2 },
    ];
  }
}

module.exports = UpperHResponse;
