const { magenta, cyan } = require('chalk');

const rDescription = require('../../util/r');
const { toFrameType } = require('../../util/frame-type');
const bufferToString = require('../buffer-to-string');
const getConverter = require('../../convertation/get-converter');

module.exports = ({ r, frameType }) => {
  const rConverter = getConverter('r');
  const frameTypeConverter = getConverter('frameType');

  return table => {
    table.push(
      { [magenta('R')]: [bufferToString(r), cyan(rConverter.fromBytes(r))] },
      { [magenta('FRAME_TYPE')]: [bufferToString(frameType), cyan(frameTypeConverter.fromBytes(frameType))] },
    );

    return table;
  };
};
