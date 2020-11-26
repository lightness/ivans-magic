const Encoder = require('./encoder');

const payload = Buffer.from([Encoder.FS, Encoder.FE, Encoder.ESC]);

const encoder = new Encoder();

console.log(encoder.encode(Encoder.R.REQUEST, Encoder.FRAME_TYPE.V, payload));
