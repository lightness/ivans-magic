const debug = require("debug")("serial-reader");

const Coder = require("../protocol/coder");
const { FS, FE } = require('../protocol/constants');
const SerialParser = require("./parser");
const framePresenter = require("../frame-presentation/presenters/frame-presenter");
const getConverter = require("../convertation/get-converter");

class SerialReader {
  constructor(serial) {
    this.serial = serial;
    this.serialParser = new SerialParser({
      frameStart: [FS],
      frameEnd: [FE],
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

    const { r: rValue, frameType: frameTypeValue, payload, crc } = decodingResult;
    const r = getConverter('r').fromBytes(rValue);
    const frameType = getConverter('frameType').fromBytes(frameTypeValue);
    debug("R:", r, rValue);
    debug("Frame type:", frameType, frameTypeValue);
    debug("Payload:", payload);
    debug("CRC:", crc);

    console.log("Message received:");
    console.log(framePresenter(decodingResult).toString());
  }
}

module.exports = SerialReader;
