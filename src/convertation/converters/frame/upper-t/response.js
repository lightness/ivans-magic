const StructureConverter = require("../../structure-converter");

class UpperTResponseConverter extends StructureConverter {
  get type() {
    return `payload-T-RESPONSE`;
  }

  get schema() {
    return [
      { name: 'targetDeviceSerialNumberPrefix', type: 'string', options: { length: 2 } },
      { name: 'targetDeviceSerialNumber', type: 'uint16' },
      { name: 'externalDeviceSerialNumberPrefix', type: 'string', options: { length: 2 } },
      { name: 'externalDeviceSerialNumber', type: 'uint16' },
      { name: 'date', type: 'datetime' },
      { name: 'irradiance', type: 'uint16' },
      { name: 'ambientTemperature', type: 'sint16' },
      { name: 'pvModuleTemperature', type: 'sint16' },
      { name: 'azimuth', type: 'uint16' },
      { name: 'altitudeAngle', type: 'uint16' },
      { name: 'flags', type: 'uint16' },
      { name: 'measurementSerialNumber', type: 'uint16' },
    ];
  }
}

module.exports = UpperTResponseConverter;
