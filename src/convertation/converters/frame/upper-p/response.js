const StructureConverter = require("../../structure-converter");

class UpperPResponseConverter extends StructureConverter {
  get type() {
    return `payload-P-RESPONSE`;
  }

  get schema() {
    return [
      { name: 'targetDeviceSerialNumberPrefix', type: 'string', options: { length: 2 } },
      { name: 'targetDeviceSerialNumber', type: 'uint16' },
      { name: 'externalDeviceSerialNumberPrefix', type: 'string', options: { length: 2 } },
      { name: 'externalDeviceSerialNumber', type: 'uint16' },
      { name: 'pairingResult', type: 'result' },
    ];
  }
}

module.exports = UpperPResponseConverter;
