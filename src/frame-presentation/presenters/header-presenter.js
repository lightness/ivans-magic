const { magenta, cyan } = require('chalk');

const rDescription = require('../../util/r');
const { toFrameType } = require('../../util/frame-type');
const byteToString = require('../byte-to-string');

module.exports = ({ r, frameType }) => {
  return table => {
    table.push(
      { [magenta('R')]: [byteToString(r), cyan(rDescription.toName(r))] },
      { [magenta('FRAME_TYPE')]: [byteToString(frameType), cyan(toFrameType(frameType))] },
    );

    return table;
  };
};
