const Coder = require("../../../protocol/coder");
const { PAIRING_RESULT } = require("../../../protocol/constants");
const BaseFormatter = require('../base-formatter');
const DescriptionMap = require('../../../frame-presentation/description-map');

class PResponse extends BaseFormatter {
  constructor() {
    super();
    this.r = Coder.R.RESPONSE;
    this.frameType = Coder.FRAME_TYPE.P;

    this.frameSchema = [
      { name: 'targetDeviceSerialNumberPrefix', type: 'string', length: 2 },
      { name: 'targetDeviceSerialNumber', type: 'uint16', length: 2 },
      { name: 'externalDeviceSerialNumberPrefix', type: 'string', length: 2 },
      { name: 'externalDeviceSerialNumber', type: 'uint16', length: 2 },
      { name: 'pairingResult', type: 'uint8', length: 1, describe: new DescriptionMap(PAIRING_RESULT) },
    ];
  }
}

module.exports = PResponse;
