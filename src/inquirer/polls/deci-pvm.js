const debug = require('debug')('deci-pvm-poll');

const getConverter = require("../../convertation/get-converter");
const StructurePoll = require("./structure");

class DeciPvmPoll extends StructurePoll {
  get type() {
    return 'deciPVM';
  }

  async makePoll(schemaItem) {
    const { name } = schemaItem;
    const converter = getConverter(this.type);

    const data = await super.makePoll({
      options: {
        schema: converter.schema.map(
          (item) => ({ ...item, message: `${name}.${item.name}` })
        ),
      },
    });

    debug('Polled data:', data);

    return { [name]: data };
  }
}

module.exports = DeciPvmPoll;
