const convertAs = require('./convert-as');

const UTC_REGEX = /\d{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2]\d|3[0-1])T(?:[0-1]\d|2[0-3]):[0-5]\d:[0-5]\dZ/;

const validateAs = {
  'string': (data, schemaItem) => {
    const buffer = convertAs['string'].toBytes(data, schemaItem.length);

    if (buffer.length > schemaItem.length) {
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
};

module.exports = validateAs;