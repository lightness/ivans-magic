const { magenta, cyan } = require('chalk');
const debug = require('debug')('payload-presenter');

const bufferToString = require('../buffer-to-string');
const getConverter = require('../../convertation/get-converter');
const presentDeciPvm = require('./deci-pvm-presenter');

const presentAsRaw = frame => {
  return table => {
    table.push(
      { [magenta('PAYLOAD')]: [bufferToString(frame.payload)] },
    );

    return table;
  };
};

const presentByConverter = (payload, converter, prefix = 'PAYLOAD') => {
  const decomposed = converter.fromBytes(payload);
  const splitted = converter.splitBytes(payload);

  return table => {
    converter.schema.forEach(schemaItem => {
      const childConverter = getConverter(schemaItem.type);
      const key = `${prefix}.${schemaItem.name}`;

      if (childConverter.schema) {
        if (childConverter.type === 'deciPVM') {
          presentDeciPvm(splitted[schemaItem.name], key)(table);
        }

        presentByConverter(splitted[schemaItem.name], childConverter, key)(table);
      } else {
        const bytes = bufferToString(splitted[schemaItem.name]);
        const data = decomposed[schemaItem.name];

        table.push({ [magenta(key)]: [bytes, cyan(data)] });
      }
    });

    return table;
  };
}

const presentBySchema = frame => {
  const { r: rValue, frameType: frameTypeValue, payload } = frame;
  const r = getConverter('r').fromBytes(rValue);
  const frameType = getConverter('frameType').fromBytes(frameTypeValue);
  
  debug(`Searching converter for frameType "${frameType}", r "${r}" and length ${payload.length}`);
  const converter = getConverter(`payload-${frameType}-${r}`, { length: payload.length });

  return presentByConverter(payload, converter);
}

module.exports = (frame) => {
  try {
    return presentBySchema(frame);
  } catch (error) {
    if (error.formatterNotFound) {
      return presentAsRaw(frame);
    } else{
      throw error;
    }
  }
};
