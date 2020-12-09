const IntegerPoll = require('./integer');

class Sint8Poll extends IntegerPoll {
  get type() {
    return 'sint8';
  }

  get minValue() {
    return -128;
  }

  get maxValue() {
    return 127;
  }
}

module.exports = Sint8Poll;
