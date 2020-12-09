const StructureConverter = require("../../structure-converter");

class UpperDResponseConverter extends StructureConverter {
  get type() {
    return `payload-D-RESPONSE`;
  }

  get schema() {
    return [
      { name: 'targetDeviceSerialNumber', type: 'string', options: { length: 6 } },
      { name: 'changeResult', type: 'result' },
    ];
  }
}

module.exports = UpperDResponseConverter;
