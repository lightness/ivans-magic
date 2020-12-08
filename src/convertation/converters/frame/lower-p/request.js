const StructureConverter = require("../../structure-converter");

class LowerPRequestConverter extends StructureConverter {
  get type() {
    return `payload-p-REQUEST`;
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

module.exports = LowerPRequestConverter;
