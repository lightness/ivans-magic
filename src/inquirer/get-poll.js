function getPoll(type) {
  const knownPolls = require('./known-polls');
  const poll = knownPolls.get(type);

  if (!poll) {
    throw new Error(`Poll for type "${type}" not registered`);
  }

  return poll;
}

module.exports = getPoll;
