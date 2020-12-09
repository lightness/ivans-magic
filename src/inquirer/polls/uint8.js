const IntegerPoll = require('./integer');

class Uint8Poll extends IntegerPoll {
  get type() {
    return 'uint8';
  }

  get minValue() {
    return 0;
  }

  get maxValue() {
    return 255;
  }
}

module.exports = Uint8Poll;
