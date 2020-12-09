const IntegerPoll = require('./integer');

class Sint32Poll extends IntegerPoll {
  get type() {
    return 'sint32';
  }

  get minValue() {
    return -2147483648;
  }

  get maxValue() {
    return 2147483647;
  }
}

module.exports = Sint32Poll;
