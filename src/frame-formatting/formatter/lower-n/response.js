const { R, FRAME_TYPE, PAIRING_RESULT } = require("../../../protocol/constants");
const BaseFormatter = require('../base-formatter');
const DescriptionMap = require('../../../frame-presentation/description-map');

class LowerNResponse extends BaseFormatter {
  constructor() {
    super();
    this.r = R.RESPONSE;
    this.frameType = FRAME_TYPE.n;

    this.frameSchema = [
      { name: 'targetDeviceSerialNumberPrefix', type: 'string', length: 2 },
      { name: 'targetDeviceSerialNumber', type: 'uint16', length: 2 },
      { name: 'pairingResult', type: 'uint8', length: 1, describe: new DescriptionMap(PAIRING_RESULT) },
    ];
  }
}

module.exports = LowerNResponse;
