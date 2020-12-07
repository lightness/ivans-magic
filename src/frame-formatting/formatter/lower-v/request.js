const { R, FRAME_TYPE } = require("../../../protocol/constants");
const BaseFormatter = require('../base-formatter');

class LowerVRequest extends BaseFormatter {
  constructor() {
    super();
    this.r = R.REQUEST;
    this.frameType = FRAME_TYPE.v;

    this.frameSchema = [
      { name: 'targetDeviceSerialNumberPrefix', type: 'string', length: 2 },
      { name: 'targetDeviceSerialNumber', type: 'uint16', length: 2 },
      { name: 'externalDeviceSerialNumberPrefix', type: 'string', length: 2 },
      { name: 'externalDeviceSerialNumber', type: 'uint16', length: 2 },
    ];
  }
}

module.exports = LowerVRequest;