const inquirer = require('inquirer');

const knownFormatters = require('../frame-formatting/known-formatters');

const selectFrameType = async () => {
  const requestFrameTypes = knownFormatters
    .map(({ r, frameType }) => `${r} ${frameType}`);

  const questions = [
    {
      type: "list",
      name: "frame",
      message: "Frame type (R, Frame type)",
      choices: requestFrameTypes
    }
  ];

  const { frame } = await inquirer.prompt(questions);
  const [r, frameType] = frame.split(' ').map(Number);

  return { r, frameType };
};

module.exports = selectFrameType;