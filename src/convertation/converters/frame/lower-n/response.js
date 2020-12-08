const StructureConverter = require("../../structure-converter");

class LowerNResponseConverter extends StructureConverter {
  get type() {
    return `payload-n-RESPONSE`;
  }

  get schema() {
    return [
      { name: 'targetDeviceSerialNumberPrefix', type: 'string', options: { length: 2 } },
      { name: 'targetDeviceSerialNumber', type: 'uint16' },
      { name: 'pairingResult', type: 'result' },
    ];
  }
}

module.exports = LowerNResponseConverter;
