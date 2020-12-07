const inquirer = require('inquirer');

const knownFormatters = require('../frame-formatting/known-formatters');
const { FRAME_TYPE_DESCRIPTION } = require('../protocol/constants');
const { toFrameType, fromFrameType } = require('../util/frame-type');
const rDescription = require('../util/r');

const selectFrameType = async () => {
  const requestFrameTypes = knownFormatters
    .map(({ r, frameType }) => {
      const frameTypeCode = toFrameType(frameType);
      const frameTypeDescription = FRAME_TYPE_DESCRIPTION[frameTypeCode];

      return `${rDescription.toName(r)} ${frameTypeCode} - ${frameTypeDescription}`;
    });
  const exitOption = 'NO (EXIT)';

  const questions = [
    {
      type: "list",
      name: "answer",
      message: "Compose frame (R, Frame type)",
      choices: [...requestFrameTypes, exitOption],
      loop: false,
    }
  ];

  const { answer } = await inquirer.prompt(questions);

  if (answer === exitOption) {
    process.exit(0);
  }

  const [r, frameType] = answer.split(' ');

  return {
    r: rDescription.toByte(r),
    frameType: fromFrameType(frameType),
  };
};

module.exports = selectFrameType;