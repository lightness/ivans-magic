const inquirer = require('inquirer');

const getSupportedFrameTypes = require('../convertation/get-supported-frame-types');
const { FRAME_TYPE_DESCRIPTION } = require('../protocol/constants');

const selectFrameType = async () => {
  const requestFrameTypes = getSupportedFrameTypes()
    .map((converterType) => {
      const [, frameType, r] = converterType.split('-');
      const frameTypeDescription = FRAME_TYPE_DESCRIPTION[frameType];

      return `${r} ${frameType} - ${frameTypeDescription}`;
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
    r,
    frameType,
  };
};

module.exports = selectFrameType;