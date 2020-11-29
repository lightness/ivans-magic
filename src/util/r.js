const Coder = require("../coder");

const toR = (byte) => {
  switch (byte) {
    case Coder.R.REQUEST:
      return 'REQUEST';
    case Coder.R.RESPONSE:
      return 'RESPONSE';
    default:
      return null;
  }
};

const fromR = (str) => {
  switch (str) {
    case 'REQUEST':
      return Coder.R.REQUEST;
    case 'RESPONSE':
      return Coder.R.RESPONSE;
    default:
      return null;
  }
};

module.exports = { fromR, toR };
