const { isNaN } = require('lodash');

const getConverter = require('../convertation/get-converter');

const UTC_REGEX = /\d{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2]\d|3[0-1])T(?:[0-1]\d|2[0-3]):[0-5]\d:[0-5]\dZ/;

const validateAs = {
  'string': (data, schemaItem) => {
    const buffer = getConverter('string').toBytes(data, schemaItem.options.length);

    if (buffer.length > schemaItem.options.length) {
      return 'Too long input';
    }

    return true;
  },
  'datetime': (data, schemaItem) => {
    const isMatched = UTC_REGEX.test(data);

    if (!isMatched) {
      return 'Wrong format of UTC date';
    }

    return true;
  },
  'uint16': (data) => {
    const number = Number(data);
    
    if (isNaN(number)) {
      return 'Integer expected';
    }

    if (number < 0 || number > 65535) {
      return 'Number is out of range of uint16 [0, 65535]';
    }

    return true;
  },
  'uint8': (data) => {
    const number = Number(data);
    
    if (isNaN(number)) {
      return 'Integer expected';
    }

    if (number < 0 || number > 255) {
      return 'Number is out of range of uint16 [0, 255]';
    }

    return true;
  },
  'result': (data) => {
    if (data !== 'ACK' && data !== 'NACK') {
      return 'Either ACK or NACK expected';
    }

    return true;
  }
};

module.exports = validateAs;