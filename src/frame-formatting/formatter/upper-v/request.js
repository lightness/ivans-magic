const { R, FRAME_TYPE } = require("../../../protocol/constants");
const BaseFormatter = require('../base-formatter');

class UpperVRequest extends BaseFormatter {
  constructor() {
    super();
    this.r = R.REQUEST;
    this.frameType = FRAME_TYPE.V;

    this.frameSchema = [];
  }
}

module.exports = UpperVRequest;