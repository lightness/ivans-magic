const { R, FRAME_TYPE } = require("../../../protocol/constants");
const BaseFormatter = require('../base-formatter');

class LowerPRequest extends BaseFormatter {
  constructor() {
    super();
    this.r = R.REQUEST;
    this.frameType = FRAME_TYPE.p;

    this.frameSchema = [
      { name: 'targetDeviceSerialNumberPrefix', type: 'string', length: 2 },
      { name: 'targetDeviceSerialNumber', type: 'uint16', length: 2 },
      { name: 'externalDeviceSerialNumberPrefix', type: 'string', length: 2 },
      { name: 'externalDeviceSerialNumber', type: 'uint16', length: 2 },
    ];
  }
}

module.exports = LowerPRequest;