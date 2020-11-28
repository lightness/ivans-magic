const { Transform } = require('stream');
const debug = require('debug')('serial-parser');

class DelimiterParser extends Transform {
  constructor(options = {}) {
    super(options);

    if (options.frameStart === undefined) {
      throw new TypeError('"frameStart" is not set');
    }

    if (options.frameEnd === undefined) {
      throw new TypeError('"frameEnd" is not set');
    }

    this.includeFrameStart = options.includeFrameStart !== undefined ? options.includeFrameStart : true;
    this.includeFrameEnd = options.includeFrameEnd !== undefined ? options.includeFrameEnd : true;
    this.frameStart = Buffer.from(options.frameStart);
    this.frameEnd = Buffer.from(options.frameEnd);
    this.buffer = Buffer.alloc(0);
  }

  processPayload(payload) {
    let data = Buffer.from(payload);

    while (data.length > 0) {
      const frameStartPosition = data.indexOf(this.frameStart);

      if (frameStartPosition === -1) {
        return Buffer.alloc(0);
      }

      // Cut & skip everything before FS
      data = data.slice(frameStartPosition);
      // now data started from FS
      
      const frameEndPosition = data.indexOf(this.frameEnd);

      if (frameEndPosition === -1) {
        return data;
      }

      let frame = data.slice(0, frameEndPosition + this.frameEnd.length);
      debug('Frame:', frame);
      
      if (!this.includeFrameStart) {
        frame = frame.slice(this.frameStart.length);
      }
      
      if (!this.includeFrameEnd) {
        frame = frame.slice(0, this.frameEnd.length * -1);
      }
      
      debug('Post-Processed Frame:', frame);
      
      this.push(frame);

      data = data.slice(frameEndPosition + this.frameEnd.length);
    }

    return Buffer.alloc(0);
  }

  _transform(chunk, encoding, cb) {
    debug('Chunk:', chunk);
    let data = Buffer.concat([this.buffer, chunk]);
    this.buffer = this.processPayload(data);
    debug('Accumulated buffer:', this.buffer);
    cb();
  }

  _flush(cb) {
    this.push(this.buffer);
    this.buffer = Buffer.alloc(0);
    cb();
  }
}

module.exports = DelimiterParser;
