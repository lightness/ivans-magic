const Coder = require("../../../protocol/coder");
const BaseFormatter = require('../base-formatter');

class HRequest extends BaseFormatter {
  constructor() {
    super();
    this.r = Coder.R.REQUEST;
    this.frameType = Coder.FRAME_TYPE.H;

    this.frameSchema = [];
  }
}

module.exports = HRequest;