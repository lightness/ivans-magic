const knownConverters = require('./known-converters');

function getSupportedFrameTypeConverters() {
  return [...knownConverters.values()]
    .reduce((acc, cur) => [...acc, ...cur], [])
    .filter(converter => converter.type.startsWith('payload-'))
    .sort((a, b) => b.type.indexOf('REQUEST') - a.type.indexOf('REQUEST'))
}

module.exports = getSupportedFrameTypeConverters;
