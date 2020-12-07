const { R, FRAME_TYPE } = require("../../../protocol/constants");
const BaseFormatter = require('../base-formatter');

class LowerVResponse extends BaseFormatter {
  constructor() {
    super();
    this.r = R.RESPONSE;
    this.frameType = FRAME_TYPE.v;

    this.frameSchema = [
      { name: 'targetDeviceSerialNumberPrefix', type: 'string', length: 2 },
      { name: 'targetDeviceSerialNumber', type: 'uint16', length: 2 },
      { name: 'externalDeviceSerialNumberPrefix', type: 'string', length: 2 },
      { name: 'externalDeviceSerialNumber', type: 'uint16', length: 2 },
    ];
  }
}

module.exports = LowerVResponse;