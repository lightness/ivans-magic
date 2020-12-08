const StructureConverter = require("../../structure-converter");

class UpperRPartialResponseConverter extends StructureConverter {
  get type() {
    return `payload-R-RESPONSE`;
  }

  get schema() {
    return [
      { name: 'targetDeviceSerialNumberPrefix', type: 'string', options: { length: 2 } },
      { name: 'targetDeviceSerialNumber', type: 'uint16' },
      { name: 'externalDeviceSerialNumberPrefix', type: 'string', options: { length: 2 } },
      { name: 'externalDeviceSerialNumber', type: 'uint16' },
      { name: 'date', type: 'datetime' },
      { name: 'parameter', type: 'deciPVM' },
    ]
  }
}

module.exports = UpperRPartialResponseConverter;
