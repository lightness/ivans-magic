const VRequest = require('./formatter/V/request');
const VResponse = require('./formatter/V/response');
const HRequest = require('./formatter/H/request');
const HResponse = require('./formatter/H/response');
const PRequest = require('./formatter/P/request');
const PResponse = require('./formatter/P/response');

module.exports = [
  new VResponse(),
  new VRequest(),
  new HRequest(),
  new HResponse(),
  new PRequest(),
  new PResponse(),
];
