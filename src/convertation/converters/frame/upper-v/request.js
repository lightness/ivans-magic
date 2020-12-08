const StructureConverter = require("../../structure-converter");

class UpperVRequestConverter extends StructureConverter {
  get type() {
    return `payload-V-REQUEST`;
  }

  get schema() {
    return [];
  }
}

module.exports = UpperVRequestConverter;