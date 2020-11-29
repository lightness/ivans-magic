const VRequest = require('./formatter/v-request');
const VResponse = require('./formatter/v-response');

module.exports = [
  new VResponse(),
  new VRequest(),
];
