const StructureConverter = require("../../structure-converter");

class UpperHRequestConverter extends StructureConverter {
  get type() {
    return `payload-H-REQUEST`;
  }

  get schema() {
    return [];
  }
}

module.exports = UpperHRequestConverter;
