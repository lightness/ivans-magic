const debug = require('debug')('frame-formatter');

const getConverter = require('../../convertation/get-converter');

class BaseFormatter {

  get frameLength() {
    return this.frameSchema
      .map(({ length }) => length)
      .reduce((acc, cur) => acc + cur, 0);
  }

  split(payload) {
    if (payload.length !== this.frameLength) {
      throw new Error(`Wrong frame length ${payload.length} (${this.frameLength} expected)`);
    }

    const result = {};
    this.frameSchema.forEach((schemaItem, index) => {
      const offset = this.frameSchema.slice(0, index)
        .map(({ length }) => length)
        .reduce((acc, cur) => acc + cur, 0);

      const buffer = Buffer.from(payload.slice(offset, offset + schemaItem.length));

      result[schemaItem.name] = buffer;
    });

    debug('Splitted:', result);

    return result;
  }

  decompose(payload) {
    const splitted = this.split(payload);

    const result = {};
    this.frameSchema.forEach((schemaItem, index) => {
      const buffer = splitted[schemaItem.name];
      const value = getConverter(schemaItem.type).fromBytes(buffer);

      result[schemaItem.name] = schemaItem.describe ? schemaItem.describe.toName(value) : value;
    });

    debug('Decomposed:', result);

    return result;
  }

  compose(data) {
    const parts = this.frameSchema.map(schemaItem => {
      const value = data[schemaItem.name];
      const buffer = getConverter(schemaItem.type).toBytes(value, schemaItem.length);
      debug(`${schemaItem.name}:`, buffer);

      return buffer;
    });

    const frame = Buffer.concat(parts);
    debug('Composed:', frame);

    return frame;
  }
}

module.exports = BaseFormatter;
