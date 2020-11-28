// const Encoder = require('./encoder');

// const payload = Buffer.from([Encoder.FS, Encoder.FE, Encoder.ESC]);

// const encoder = new Encoder();

// console.log(encoder.encode(Encoder.R.REQUEST, Encoder.FRAME_TYPE.V, payload));

const FrameFormatManager = require('./frame-formatting/frame-format-manager');
const VResponse = require('./frame-formatting/formatter/v-response');
const Coder = require('./coder');

const ffm = new FrameFormatManager([
  new VResponse()
]);

ffm.compose(Coder.R.RESPONSE, Coder.FRAME_TYPE.V)
  .then((frame) => {
    console.log(frame);

    const decomposed = ffm.decompose(Coder.R.RESPONSE, Coder.FRAME_TYPE.V, frame);

    console.log(decomposed);
  })


