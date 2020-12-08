const StructureConverter = require("../../structure-converter");

class UpperHResponseConverter extends StructureConverter {
  get type() {
    return `payload-H-RESPONSE`;
  }

  get schema() {
    return [
      { name: 'deviceSerialNumberPrefix', type: 'string', options: { length: 2 } },
      { name: 'deviceSerialNumber', type: 'uint16' },
    ];
  }
}

module.exports = UpperHResponseConverter;
