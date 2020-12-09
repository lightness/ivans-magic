const debug = require('debug')('structure-poll');

const getPoll = require("../get-poll");

class StructurePoll {
  get type() {
    return 'structure';
  }

  async makePoll(schemaItem) {
    const { schema } = schemaItem.options;

    let data = {};

    for (const item of schema) {
      const poll = getPoll(item.type);
      const pollingResult = await poll.makePoll(item);
      debug(`Used ${poll.type} poll to get data:`, pollingResult);

      data = { ...data, ...pollingResult };
    }

    debug('Data:', JSON.stringify(data));

    return data;
  }
}

module.exports = StructurePoll;
