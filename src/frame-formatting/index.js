const FrameFormatManager = require('./frame-format-manager');
const knownFormatters = require('./known-formatters');

const frameFormatManager = new FrameFormatManager(knownFormatters);

module.exports = frameFormatManager;
