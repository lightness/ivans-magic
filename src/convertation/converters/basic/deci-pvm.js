const StructureConverter = require("../structure-converter");

class DeciPvmConverter extends StructureConverter {
  get type() {
    return 'deciPVM';
  }

  get length() {
    return 9;
  }

  get schema() {
    return [
      { name: 'typeOfResult', type: 'uint16' },
      { name: 'measurementResult', type: 'sint32' },
      { name: 'multiplier', type: 'sint8' },
      { name: 'decimalPlacesAndFlags', type: 'uint8' },
      { name: 'units', type: 'uint8' },
    ];
  }

  toBytes(data) {
    return super.toBytes(data, { schema: this.schema });
  }

  fromBytes(bytes) {
    return super.fromBytes(bytes, { schema: this.schema });
  }
}

module.exports = DeciPvmConverter;
