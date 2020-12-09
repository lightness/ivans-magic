const StructureConverter = require("../../structure-converter");

class LowerCRequestConverter extends StructureConverter {
  get type() {
    return `payload-c-REQUEST`;
  }

  get schema() {
    return [
      { name: 'targetDeviceSerialNumberPrefix', type: 'string', options: { length: 2 } },
      { name: 'targetDeviceSerialNumber', type: 'uint16' },
      { name: 'externalDeviceSerialNumberPrefix', type: 'string', options: { length: 2 } },
      { name: 'externalDeviceSerialNumber', type: 'uint16' },
      { name: 'measurementType', type: 'uint8' },
      { name: 'previousDataReceiveResult', type: 'result' },
    ];
  }
}

module.exports = LowerCRequestConverter;
