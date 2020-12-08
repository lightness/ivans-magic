const StructureConverter = require("../../structure-converter");

class LowerNRequestConverter extends StructureConverter {
  get type() {
    return `payload-n-REQUEST`;
  }

  get schema() {
    return [
      { name: 'targetDeviceSerialNumberPrefix', type: 'string', options: { length: 2 } },
      { name: 'targetDeviceSerialNumber', type: 'uint16' },
      { name: 'dateOfNextCalibration', type: 'datetime' },
    ];
  }
}

module.exports = LowerNRequestConverter;