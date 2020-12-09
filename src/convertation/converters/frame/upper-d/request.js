const StructureConverter = require("../../structure-converter");

class UpperDRequestConverter extends StructureConverter {
  get type() {
    return `payload-D-REQUEST`;
  }

  get schema() {
    return [
      { name: 'targetDeviceSerialNumber', type: 'string', options: { length: 6 } },
    ];
  }
}

module.exports = UpperDRequestConverter;
