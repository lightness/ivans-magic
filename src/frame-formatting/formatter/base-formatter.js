const debug = require('debug')('frame-formatter');

const convertAs = require('../../inquirer/convert-as');

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

      const buffer = payload.slice(offset, offset + schemaItem.length);

      result[schemaItem.name] = buffer;
    });

    debug('Splitted:', result);

    return result;
  }

  decompose(payload) {
    if (payload.length !== this.frameLength) {
      throw new Error(`Wrong frame length ${payload.length} (${this.frameLength} expected)`);
    }

    const result = {};
    this.frameSchema.forEach((schemaItem, index) => {
      const offset = this.frameSchema.slice(0, index)
        .map(({ length }) => length)
        .reduce((acc, cur) => acc + cur, 0);

      const buffer = Buffer.from(payload.slice(offset, offset + schemaItem.length));

      if (BaseFormatter.isLeRequired(schemaItem.type)) {
        debug(`${schemaItem.name} (LE)`, buffer);
        buffer.reverse();
      }

      debug(`${schemaItem.name}`, buffer);
      const value = convertAs[schemaItem.type].fromBytes(buffer);

      result[schemaItem.name] = schemaItem.describe ? schemaItem.describe.toName(value) : value;
    });

    debug('Decomposed:', result);

    return result;
  }

  compose(data) {
    const parts = this.frameSchema.map(schemaItem => {
      const value = data[schemaItem.name];
      const buffer = convertAs[schemaItem.type].toBytes(value, schemaItem.length);
      debug(`${schemaItem.name}:`, buffer);

      if (BaseFormatter.isLeRequired(schemaItem.type)) {
        buffer.reverse();

        debug(`${schemaItem.name} (LE):`, buffer);
      }

      return buffer;
    });

    const frame = Buffer.concat(parts);
    debug('Composed:', frame);

    return frame;
  }

  static isLeRequired(type) {
    return type !== 'string';
  }
}

module.exports = BaseFormatter;
