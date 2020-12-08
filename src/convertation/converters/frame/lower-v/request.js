const StructureConverter = require("../../structure-converter");

class LowerVRequestConverter extends StructureConverter {
  get type() {
    return `payload-v-REQUEST`;
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

module.exports = LowerVRequestConverter;
