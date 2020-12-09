const debug = require('debug')('poll');

const getPoll = require('./get-poll');

const pollBySchema = async (schema) => {
  let data = {};

  for (const schemaItem of schema) {
    const poll = getPoll(schemaItem.type);
    const pollingResult = await poll.makePoll(schemaItem);

    data = { ...data, ...pollingResult };
  }

  debug('Data:', JSON.stringify(data));

  return data;
};

module.exports = pollBySchema;
