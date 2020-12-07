const { R, FRAME_TYPE } = require("../../../protocol/constants");
const BaseFormatter = require('../base-formatter');

class LowerNRequest extends BaseFormatter {
  constructor() {
    super();
    this.r = R.REQUEST;
    this.frameType = FRAME_TYPE.n;

    this.frameSchema = [
      { name: 'targetDeviceSerialNumberPrefix', type: 'string', length: 2 },
      { name: 'targetDeviceSerialNumber', type: 'uint16', length: 2 },
      { name: 'dateOfNextCalibration', type: 'datetime', length: 8 },
    ];
  }
}

module.exports = LowerNRequest;