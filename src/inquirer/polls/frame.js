const inquirer = require('inquirer');
const { uniq } = require('lodash');

const getSupportedFrameTypeConverters = require('../../convertation/get-supported-frame-type-converters');
const { FRAME_TYPE_DESCRIPTION } = require('../../protocol/constants');

class FramePoll {
  get type() {
    return 'frame';
  }

  async makePoll() {
    const supportedConverterTypes = getSupportedFrameTypeConverters()
      .map(converter => {
        const [, frameType, r] = converter.type.split('-');

        return { frameType, r, length: converter.getLength() };
      });

    const supportedFrameTypes = uniq(supportedConverterTypes.map(({ frameType }) => frameType));
    const { frameType } = await this.pollFrameType(supportedFrameTypes);

    const filtered = supportedConverterTypes.filter(x => x.frameType === frameType);

    if (filtered.length === 1) {
      return filtered[0];
    }

    const supportedR = uniq(filtered.map(({ r }) => r));
    const { r } = await this.pollR(supportedR);

    const filtered2 = filtered.filter(x => x.r === r);

    if (filtered2.length === 1) {
      return filtered2[0];
    }

    const supportedLengths = filtered2.map(({ length }) => length);
    const { length } = await this.pollLength(supportedLengths);

    return { frameType, r, length };
  }

  async pollFrameType(list) {
    const questions = {
      type: 'list',
      name: 'frameType',
      message: 'Frame type',
      choices: list.map(item => `${item} - ${FRAME_TYPE_DESCRIPTION[item]}`),
      loop: false,
    };

    const { frameType } = await inquirer.prompt(questions);

    return { frameType: frameType[0] };
  }

  async pollR(list) {
    const questions = {
      type: 'list',
      name: 'r',
      message: 'Request or Response',
      choices: list,
      loop: false,
    };

    return await inquirer.prompt(questions);
  }

  async pollLength(list) {
    const questions = {
      type: 'list',
      name: 'length',
      message: 'Frame length',
      choices: list,
      loop: false,
    };

    return await inquirer.prompt(questions);
  }
}

module.exports = FramePoll;
