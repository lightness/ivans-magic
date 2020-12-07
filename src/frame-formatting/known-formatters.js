const UpperVRequest = require('./formatter/upper-v/request');
const UpperVResponse = require('./formatter/upper-v/response');
const UpperHRequest = require('./formatter/upper-h/request');
const UpperHResponse = require('./formatter/upper-h/response');
const UpperPRequest = require('./formatter/upper-p/request');
const UpperPResponse = require('./formatter/upper-p/response');
const LowerPRequest = require('./formatter/lower-p/request');
const LowerPResponse = require('./formatter/lower-p/response');
const UpperNRequest = require('./formatter/upper-n/request');
const UpperNResponse = require('./formatter/upper-n/response');
const LowerVRequest = require('./formatter/lower-v/request');
const LowerVResponse = require('./formatter/lower-v/response');
const LowerNRequest = require('./formatter/lower-n/request');
const LowerNResponse = require('./formatter/lower-n/response');

module.exports = [
  new UpperVResponse(),
  new UpperVRequest(),
  new UpperHRequest(),
  new UpperHResponse(),
  new UpperPRequest(),
  new UpperPResponse(),
  new UpperNRequest(),
  new UpperNResponse(),
  new LowerVRequest(),
  new LowerVResponse(),
  new LowerPRequest(),
  new LowerPResponse(),
  new LowerNRequest(),
  new LowerNResponse(),
].sort((a, b) => a.r - b.r);
