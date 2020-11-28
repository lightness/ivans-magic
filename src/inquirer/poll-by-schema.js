const inquirer = require('inquirer');
const debug = require('debug')('poll');

const covertAs = require('./convert-as');
const validateAs = require('./validate-as');

const questionsFromSchema = (schema) => {
  return schema.map((schemaItem) => {
    const { name, type, length } = schemaItem;

    return {
      type: 'input',
      name,
      message: name,
      validate: function(data) {
        return validateAs[type](data, schemaItem);
      },
    }
  })
}

const pollBySchema = async (schema) => {
  const questions = questionsFromSchema(schema);

  const data = await inquirer.prompt(questions);
  debug('Data:', JSON.stringify(data));

  return data;
};

module.exports = pollBySchema;
