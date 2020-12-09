const StructureConverter = require("../../structure-converter");

class UpperCRequestConverter extends StructureConverter {
  get type() {
    return `payload-C-REQUEST`;
  }

  get schema() {
    return [
      { name: 'targetDeviceSerialNumberPrefix', type: 'string', options: { length: 2 } },
      { name: 'targetDeviceSerialNumber', type: 'uint16' },
      { name: 'externalDeviceSerialNumberPrefix', type: 'string', options: { length: 2 } },
      { name: 'externalDeviceSerialNumber', type: 'uint16' },
      { name: 'previousDataReceiveResult', type: 'result' },
    ];
  }
}

module.exports = UpperCRequestConverter;
