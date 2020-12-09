const IntegerPoll = require('./integer');

class Sint16Poll extends IntegerPoll {
  get type() {
    return 'sint16';
  }

  get minValue() {
    return -32768;
  }

  get maxValue() {
    return 32767;
  }
}

module.exports = Sint16Poll;
