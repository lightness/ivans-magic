const knownConverters = require('./known-converters');

function getConverter(type) {
  const converter = knownConverters.find(c => c.type === type);

  if (!converter) {
    throw new Error(`Converter for type "${type}" not registred`);
  }

  return converter;
}

module.exports = getConverter;
