const inquireBySchema = require("../inquirer/poll-by-schema");

class FrameFormatManager {
  constructor(formatters) {
    this.formatters = formatters;
  }

  getFormatter(r, frameType) {
    const formatter = this.formatters.find(formatter => {
      return formatter.r === r 
        && formatter.frameType === frameType;
    });

    if (!formatter) {
      const error = new Error(`Formatter not found (${r}, ${frameType})`);
      error.formatterNotFound = true;

      throw error;
    }

    return formatter;
  }

  async compose(r, frameType) {
    const formatter = this.getFormatter(r, frameType);
    const data = await inquireBySchema(formatter.frameSchema);

    return formatter.compose(data);
  }

  split(r, frameType, payload) {
    const formatter = this.getFormatter(r, frameType);

    return formatter.split(payload);
  }

  decompose(r, frameType, payload) {
    const formatter = this.getFormatter(r, frameType);

    return formatter.decompose(payload);
  }

}

module.exports = FrameFormatManager;