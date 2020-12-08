const getConverter = require('../get-converter');

function getSchemaItemLength(schemaItem) {
  const converter = getConverter(schemaItem.type);

  return converter.length || schemaItem.options.length;
}

class StructureConverter {
  get type() {
    return 'structure';
  }

  toBytes(data, { schema: customSchema } = {}) {
    const schema = customSchema || this.schema;

    return schema.reduce(
      (acc, schemaItem) => {
        const { options, type, name, getConverter: getDynamicConverter } = schemaItem;
        const converter = getDynamicConverter 
          ? getDynamicConverter(type, { data })
          : getConverter(type);
        const value = data[name];
        const context = {
          data,
          bytes: acc,
          parent: this.type,
        }

        return Buffer.concat([acc, converter.toBytes(value, options, context)]);
      },
      Buffer.from([]),
    );
  }

  fromBytes(bytes, { schema: customSchema } = {}) {
    const schema = customSchema || this.schema;

    return schema.reduce(
      (acc, schemaItem, index) => {
        const { type, name, options, getConverter: getDynamicConverter } = schemaItem;
        const converter = getDynamicConverter
          ? getDynamicConverter(type, { data: acc })
          : getConverter(type);
        const offset = schema.slice(0, index)
          .map(getSchemaItemLength)
          .reduce((acc, cur) => acc + cur, 0);
        const length = getSchemaItemLength(schemaItem);

        // TODO: Try get rid of buffer copy
        const buffer = Buffer.from(bytes.slice(offset, offset + length));
        const context = {
          data: acc,
          bytes,
          parent: this.type,
        }

        return {
          ...acc,
          [name]: converter.fromBytes(buffer, options, context),
        };
      },
      {},
    );
  }

  splitBytes(bytes, { schema: customSchema } = {}) {
    const schema = customSchema || this.schema;

    return schema.reduce(
      (acc, schemaItem, index) => {
        const { name } = schemaItem;
        
        const offset = schema.slice(0, index)
          .map(getSchemaItemLength)
          .reduce((acc, cur) => acc + cur, 0);
        const length = getSchemaItemLength(schemaItem);

        // TODO: Try get rid of buffer copy
        const buffer = Buffer.from(bytes.slice(offset, offset + length));

        return {
          ...acc,
          [name]: buffer,
        };
      },
      {},
    );
  }
}

module.exports = StructureConverter;
