const inquirer = require('inquirer');
const { RESULT } = require('../../protocol/constants');

class ResultPoll {
  get type() {
    return 'result';
  }

  async makePoll(schemaItem) {
    const { name } = schemaItem;

    const questions = {
      type: 'list',
      name,
      message: name,
      choices: Object.keys(RESULT),
      loop: false,
    };

    return await inquirer.prompt(questions);
  }
}

module.exports = ResultPoll;
