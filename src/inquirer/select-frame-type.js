const inquirer = require('inquirer');

const knownFormatters = require('../frame-formatting/known-formatters');
const { toFrameType, fromFrameType } = require('../util/frame-type');
const { toR, fromR } = require('../util/r');

const selectFrameType = async () => {
  const requestFrameTypes = knownFormatters
    .map(({ r, frameType }) => `${toR(r)} ${toFrameType(frameType)}`);
  const exitOption = 'NO (EXIT)';

  const questions = [
    {
      type: "list",
      name: "answer",
      message: "Compose frame (R, Frame type)",
      choices: [...requestFrameTypes, exitOption],
    }
  ];

  const { answer } = await inquirer.prompt(questions);

  if (answer === exitOption) {
    process.exit(0);
  }

  const [r, frameType] = answer.split(' ');

  return {
    r: fromR(r),
    frameType: fromFrameType(frameType),
  };
};

module.exports = selectFrameType;