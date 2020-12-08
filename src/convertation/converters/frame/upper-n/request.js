const StructureConverter = require("../../structure-converter");

class UpperNRequestConverter extends StructureConverter {
  get type() {
    return `payload-N-REQUEST`;
  }

  get schema() {
    return [
      { name: 'targetDeviceSerialNumberPrefix', type: 'string', options: { length: 2 } },
      { name: 'targetDeviceSerialNumber', type: 'uint16' },
      { name: 'externalDeviceSerialNumberPrefix', type: 'string', options: { length: 2 } },
      { name: 'externalDeviceSerialNumber', type: 'uint16' },
      { name: 'dateOfNextCalibration', type: 'datetime' },
    ];
  }
}

module.exports = UpperNRequestConverter;
