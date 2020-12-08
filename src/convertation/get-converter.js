const { isEmpty } = require('lodash');

function getConverter(type, { length } = {}) {
  const knownConverters = require('./known-converters');
  const converters = knownConverters.get(type);

  if (isEmpty(converters)) {
    throw new Error(`Converter for type "${type}" not registred`);
  }

  if (converters.length === 1) {
    return converters[0];
  }

  const converter = converters.find(converter => converter.schemaLength === length);

  if (!converter) {
    throw new Error(`Converter for type "${type}" and payload length ${length} not registred`);
  }

  return converter;
}

module.exports = getConverter;
