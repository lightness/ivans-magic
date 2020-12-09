const inquirer = require('inquirer');

const UTC_REGEX = /\d{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2]\d|3[0-1])T(?:[0-1]\d|2[0-3]):[0-5]\d:[0-5]\dZ/;

class DatetimePoll {
  get type() {
    return 'datetime';
  }

  async makePoll(schemaItem) {
    const { name } = schemaItem;

    const questions = {
      type: 'input',
      name,
      message: name,
      validate: (data) => this.validate(data, schemaItem),
    };

    return await inquirer.prompt(questions);
  }

  validate(value, schemaItem) {
    const isMatched = UTC_REGEX.test(value);

    if (!isMatched) {
      return 'Wrong format of UTC date';
    }

    return true;
  }
}

module.exports = DatetimePoll;
