const debug = require('debug')('frame-formatter');

const convertAs = require('../../inquirer/convert-as');
const bufferPadStart = require('../../util/buffer-pad-start');

class BaseFormatter {

  get frameLength() {
    return this.frameSchema
      .map(({ length }) => length)
      .reduce((acc, cur) => acc + cur, 0);
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

      const buffer = payload.slice(offset, offset + schemaItem.length);
      debug(`${schemaItem.name}`, buffer);
      const value = convertAs[schemaItem.type].fromBytes(buffer);

      result[schemaItem.name] = value;
    });

    debug('Decomposed:', result);

    return result;
  }

  compose(data) {
    const parts = this.frameSchema.map(schemaItem => {
      const value = data[schemaItem.name];
      const buffer = convertAs[schemaItem.type].toBytes(value);
      const padded = bufferPadStart(buffer, schemaItem.length, 0x00);
      debug(`${schemaItem.name}:`, padded);

      return padded;
    });

    const frame = Buffer.concat(parts);
    debug('Composed:', frame);

    return frame;
  }
}

module.exports = BaseFormatter;
