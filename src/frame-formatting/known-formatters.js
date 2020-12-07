const VRequest = require('./formatter/v/request');
const VResponse = require('./formatter/v/response');
const HRequest = require('./formatter/h/request');
const HResponse = require('./formatter/h/response');
const PRequest = require('./formatter/p/request');
const PResponse = require('./formatter/p/response');
const LowerPRequest = require('./formatter/lower-p/request');
const LowerPResponse = require('./formatter/lower-p/response');

module.exports = [
  new VResponse(),
  new VRequest(),
  new HRequest(),
  new HResponse(),
  new PRequest(),
  new PResponse(),
  new LowerPRequest(),
  new LowerPResponse(),
];
