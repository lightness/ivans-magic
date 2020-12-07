const { R, FRAME_TYPE } = require("../../../protocol/constants");
const BaseFormatter = require('../base-formatter');

class VResponse extends BaseFormatter {
  constructor() {
    super();
    this.r = R.RESPONSE;
    this.frameType = FRAME_TYPE.V;

    this.frameSchema = [
      { name: 'serialNumber', type: 'string', length: 6 },
      { name: 'firmwareVersion', type: 'string', length: 3 },
      { name: 'versionNumber', type: 'string', length: 1 },
      { name: 'typeOfMeter', type: 'string', length: 10 },
      { name: 'pcbDateCode', type: 'string', length: 4 },
      { name: 'dateOfNextCalibration', type: 'datetime', length: 8 },
    ];
  }
}

module.exports = VResponse;
