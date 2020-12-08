const { magenta, cyan } = require('chalk');

const bufferToString = require('../buffer-to-string');
const getConverter = require('../../convertation/get-converter');

const presentAsRaw = frame => {
  return table => {
    table.push(
      { [magenta('PAYLOAD')]: [bufferToString(frame.payload)] },
    );

    return table;
  };
};

const presentBySchema = frame => {
  const { r: rValue, frameType: frameTypeValue, payload } = frame;
  const r = getConverter('r').fromBytes(rValue);
  const frameType = getConverter('frameType').fromBytes(frameTypeValue);
  const converter = getConverter(`payload-${frameType}-${r}`, { length: frame.length });

  const decomposed = converter.fromBytes(payload);
  const splitted = converter.splitBytes(payload);

  return table => {
    Object.keys(splitted)
      .map(field => {
        table.push(
          { 
            [magenta(`PAYLOAD.${field}`)]: [
              bufferToString(splitted[field]),
              cyan(decomposed[field]),
            ],
          },
        );
      })

    return table;
  };
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
