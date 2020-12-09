const IntegerPoll = require('./integer');

class Uint16Poll extends IntegerPoll {
  get type() {
    return 'uint16';
  }

  get minValue() {
    return 0;
  }

  get maxValue() {
    return 65535;
  }
}

module.exports = Uint16Poll;
