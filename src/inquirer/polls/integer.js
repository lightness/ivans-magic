const inquirer = require('inquirer');
const { isNaN } = require('lodash');

class IntegerPoll {
  get type() {
    return 'integer';
  }

  async makePoll(schemaItem) {
    const { name, message } = schemaItem;

    const questions = {
      type: 'input',
      name,
      message: message || name,
      validate: (data) => this.validate(data, schemaItem),
    };

    return await inquirer.prompt(questions);
  }

  validate(value, schemaItem) {
    const number = parseInt(value, 10);
    
    if (isNaN(number)) {
      return 'Integer expected';
    }

    if (number < this.minValue || number > this.maxValue) {
      return `Number is out of range of ${this.type} [${this.minValue}, ${this.maxValue}]`;
    }

    return true;
  }
}

module.exports = IntegerPoll;
