const convertAs = require('./convert-as');

function testString() {
  const str = 'Hello, Vanya, bleat!';

  const { fromBytes, toBytes } = convertAs['string'];

  const result = fromBytes(toBytes(str));

  console.log(str);
  console.log(result);

  if (str !== result) {
    throw new Error('Conversion process failed - string');
  }
}

function testDatetime() {
  const timestamp = '2020-11-28T02:17:00Z';

  const { fromBytes, toBytes } = convertAs['datetime'];

  const result = fromBytes(toBytes(timestamp));

  console.log(timestamp);
  console.log(result);

  if (new Date(timestamp).getTime() !== new Date(result).getTime()) {
    throw new Error('Conversion process failed - timestamp');
  }
}

testString();
testDatetime();

// const timestamp = Date.now();
// console.log('timestamp:', timestamp);

// const hex = timestamp.toString(16);
// console.log('hex:', hex);

// const buffer = Buffer.from(hex, 'hex');
// console.log('buffer:', buffer);

// const hex2 = buffer.toString('hex');
// console.log('hex2:', hex2);

// const timestamp2 = parseInt(hex2, 16);
// console.log('timestamp2:', timestamp2);
