const StructureConverter = require("../../structure-converter");

class UpperPRequestConverter extends StructureConverter {
  get type() {
    return `payload-P-REQUEST`;
  }

  get schema() {
    return [
      { name: 'targetDeviceSerialNumberPrefix', type: 'string', options: { length: 2 } },
      { name: 'targetDeviceSerialNumber', type: 'uint16' },
      { name: 'externalDeviceSerialNumberPrefix', type: 'string', options: { length: 2 } },
      { name: 'externalDeviceSerialNumber', type: 'uint16' },
    ];
  }
}

module.exports = UpperPRequestConverter;
