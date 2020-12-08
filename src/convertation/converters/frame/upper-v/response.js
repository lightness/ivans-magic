const StructureConverter = require("../../structure-converter");

class UpperVResponseConverter extends StructureConverter {
  get type() {
    return `payload-V-RESPONSE`;
  }

  get schema() {
    return [
      { name: 'serialNumber', type: 'string', options: { length: 6 } },
      { name: 'firmwareVersion', type: 'string', options: { length: 3 } },
      { name: 'versionNumber', type: 'string', options: { length: 1 } },
      { name: 'typeOfMeter', type: 'string', options: { length: 10 } },
      { name: 'pcbDateCode', type: 'string', options: { length: 4 } },
      { name: 'dateOfNextCalibration', type: 'datetime' },
    ];
  }
}

module.exports = UpperVResponseConverter;