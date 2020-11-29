const { magenta, cyan } = require('chalk');

const bufferToString = require('../buffer-to-string');
const frameFormatManager = require('../../frame-formatting');

const presentAsRaw = frame => {
  return table => {
    table.push(
      { [magenta('PAYLOAD')]: [bufferToString(frame.payload)] },
    );

    return table;
  };
};

const presentBySchema = frame => {
  const { r, frameType, payload } = frame;
  const splitted = frameFormatManager.split(r, frameType, payload);
  const decomposed = frameFormatManager.decompose(r, frameType, payload);

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
