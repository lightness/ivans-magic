const Coder = require("../../../protocol/coder");
const BaseFormatter = require('../base-formatter');

class PRequest extends BaseFormatter {
  constructor() {
    super();
    this.r = Coder.R.REQUEST;
    this.frameType = Coder.FRAME_TYPE.P;

    this.frameSchema = [
      { name: 'targetDeviceSerialNumberPrefix', type: 'string', length: 2 },
      { name: 'targetDeviceSerialNumber', type: 'uint16', length: 2 },
      { name: 'externalDeviceSerialNumberPrefix', type: 'string', length: 2 },
      { name: 'externalDeviceSerialNumber', type: 'uint16', length: 2 },
    ];
  }
}

module.exports = PRequest;