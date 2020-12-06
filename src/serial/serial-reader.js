const debug = require("debug")("serial-reader");

const Coder = require("../protocol/coder");
const SerialParser = require("./parser");
const framePresenter = require("../frame-presentation/presenters/frame-presenter");

class SerialReader {
  constructor(serial) {
    this.serial = serial;
    this.serialParser = new SerialParser({
      frameStart: [Coder.FS],
      frameEnd: [Coder.FE],
    });
    this.coder = new Coder();
  }

  listen() {
    this.serial.pipe(this.serialParser).on("data", this.onData.bind(this));
  }

  onData(data) {
    debug("Data:", data);
    const decodingResult = this.coder.decode(data);

    if (!decodingResult) {
      debug("Decoding failed");
      return;
    }

    const { r, frameType, payload, crc } = decodingResult;
    debug("R:", r);
    debug("Frame type:", frameType);
    debug("Payload:", payload);
    debug("CRC:", crc);

    console.log("Message received:");
    console.log(framePresenter(decodingResult).toString());
  }
}

module.exports = SerialReader;
