const { magenta, cyan } = require('chalk');

const { toR } = require('../../util/r');
const { toFrameType } = require('../../util/frame-type');
const byteToString = require('../byte-to-string');

module.exports = ({ r, frameType }) => {
  return table => {
    table.push(
      { [magenta('R')]: [byteToString(r), cyan(toR(r))] },
      { [magenta('FRAME_TYPE')]: [byteToString(frameType), cyan(toFrameType(frameType))] },
    );

    return table;
  };
};
