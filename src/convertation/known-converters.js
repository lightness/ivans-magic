const DatetimeConverter = require('./converters/datetime-converter');
const Long64Converter = require('./converters/long64-converter');
const StringConverter = require('./converters/string-converter');
const Uint8Converter = require('./converters/uint8-converter');
const Uint16Converter = require('./converters/uint16-converter');

module.exports = [
  new DatetimeConverter(),
  new Long64Converter(),
  new StringConverter(),
  new Uint8Converter(),
  new Uint16Converter(),
];
