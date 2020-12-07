const { R, FRAME_TYPE } = require("../../../protocol/constants");
const BaseFormatter = require('../base-formatter');

class UpperRRequest extends BaseFormatter {
  constructor() {
    super();
    this.r = R.REQUEST;
    this.frameType = FRAME_TYPE.R;

    this.frameSchema = [
      { name: 'targetDeviceSerialNumberPrefix', type: 'string', length: 2 },
      { name: 'targetDeviceSerialNumber', type: 'uint16', length: 2 },
      { name: 'externalDeviceSerialNumberPrefix', type: 'string', length: 2 },
      { name: 'externalDeviceSerialNumber', type: 'uint16', length: 2 },
      { name: 'bankNumber', type: 'uint8', length: 1 },
      { name: 'cellNumber', type: 'uint16', length: 2 },
      { name: 'measurementType', type: 'uint8', length: 1 },
      { name: 'previousDataReceiveResult', type: 'uint8', length: 1 },
    ];
  }
}

module.exports = UpperRRequest;