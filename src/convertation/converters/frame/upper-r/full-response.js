const StructureConverter = require("../../structure-converter");

class UpperRFullResponseConverter extends StructureConverter {
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
      { name: 'irradiance', type: 'deciPVM' },
      { name: 'ambientTemperature', type: 'deciPVM' },
      { name: 'pvModuleTemperature', type: 'deciPVM' },
      { name: 'azimuth', type: 'deciPVM' },
      { name: 'altitudeAngle', type: 'deciPVM' },
    ];
  }
}

module.exports = UpperRFullResponseConverter;
