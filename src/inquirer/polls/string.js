const inquirer = require('inquirer');
const getConverter = require('../../convertation/get-converter');

class StringPoll {
  get type() {
    return 'string';
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
    const buffer = getConverter(this.type).toBytes(value, schemaItem.options.length);

    if (buffer.length > schemaItem.options.length) {
      return 'Too long input';
    }

    return true;
  }
}

module.exports = StringPoll;
