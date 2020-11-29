const toFrameType = byte => Buffer.from([byte]).toString('ascii');

const fromFrameType = str => Buffer.from(str, 'ascii')[0];

module.exports = { fromFrameType, toFrameType };
