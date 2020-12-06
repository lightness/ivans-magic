const Coder = require("../../../protocol/coder");
const BaseFormatter = require('../base-formatter');

class VRequest extends BaseFormatter {
  constructor() {
    super();
    this.r = Coder.R.REQUEST;
    this.frameType = Coder.FRAME_TYPE.V;

    this.frameSchema = [];
  }
}

module.exports = VRequest;