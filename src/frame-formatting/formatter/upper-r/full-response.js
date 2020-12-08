const { R, FRAME_TYPE, RESULT } = require("../../../protocol/constants");
const BaseFormatter = require('../base-formatter');

class UpperRFullResponse extends BaseFormatter {
  constructor() {
    super();
    this.r = R.RESPONSE;
    this.frameType = FRAME_TYPE.R;

    this.frameSchema = [
      { name: 'targetDeviceSerialNumberPrefix', type: 'string', length: 2 },
      { name: 'targetDeviceSerialNumber', type: 'uint16', length: 2 },
      { name: 'externalDeviceSerialNumberPrefix', type: 'string', length: 2 },
      { name: 'externalDeviceSerialNumber', type: 'uint16', length: 2 },
      { name: 'date', type: 'datetime', length: 8 },
      { name: 'irradiance', type: 'deciPVM', length: 9 },
      { name: 'ambientTemperature', type: 'deciPVM', length: 9 },
      { name: 'pvModuleTemperature', type: 'deciPVM', length: 9 },
      { name: 'azimuth', type: 'deciPVM', length: 9 },
      { name: 'altitudeAngle', type: 'deciPVM', length: 9 },
    ];
  }
}

module.exports = UpperRFullResponse;
