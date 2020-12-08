const knownConverters = require('./known-converters');

function getSupportedFrameTypes() {
  return [...knownConverters.values()]
    .reduce((acc, cur) => [...acc, ...cur], [])
    .map(converter => converter.type)
    .filter(type => type.startsWith('payload-'))
    .sort((a, b) => b.indexOf('REQUEST') - a.indexOf('REQUEST'))

}

module.exports = getSupportedFrameTypes;
