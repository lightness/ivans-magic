const DatetimeConverter = require('./converters/basic/datetime');
const Long64Converter = require('./converters/basic/long64');
const StringConverter = require('./converters/basic/string');
const Uint8Converter = require('./converters/basic/uint8');
const Uint16Converter = require('./converters/basic/uint16');
const StructureConverter = require('./converters/structure-converter');
const DeciPvmConverter = require('./converters/basic/deci-pvm');
const UpperVRequestConverter = require('./converters/frame/upper-v/request');
const UpperVResponseConverter = require('./converters/frame/upper-v/response');
const RConverter = require('./converters/common/r');
const FrameTypeConverter = require('./converters/common/frame-type');
const LowerNRequestConverter = require('./converters/frame/lower-n/request');
const LowerNResponseConverter = require('./converters/frame/lower-n/response');
const LowerPRequestConverter = require('./converters/frame/lower-p/request');
const LowerPResponseConverter = require('./converters/frame/lower-p/response');
const ResultConverter = require('./converters/common/result');
const LowerVRequestConverter = require('./converters/frame/lower-v/request');
const LowerVResponseConverter = require('./converters/frame/lower-v/response');
const UpperHRequestConverter = require('./converters/frame/upper-h/request');
const UpperHResponseConverter = require('./converters/frame/upper-h/response');
const UpperNRequestConverter = require('./converters/frame/upper-n/request');
const UpperNResponseConverter = require('./converters/frame/upper-n/response');
const UpperPRequestConverter = require('./converters/frame/upper-p/request');
const UpperPResponseConverter = require('./converters/frame/upper-p/response');
const UpperRRequestConverter = require('./converters/frame/upper-r/request');
const UpperRFullResponseConverter = require('./converters/frame/upper-r/full-response');
const UpperRPartialResponseConverter = require('./converters/frame/upper-r/partial-response');

module.exports = [
  new DatetimeConverter(),
  new Long64Converter(),
  new StringConverter(),
  new Uint8Converter(),
  new Uint16Converter(),
  new StructureConverter(),
  new DeciPvmConverter(),

  new RConverter(),
  new FrameTypeConverter(),
  new ResultConverter(),

  new LowerNRequestConverter(),
  new LowerNResponseConverter(),

  new LowerPRequestConverter(),
  new LowerPResponseConverter(),

  new LowerVRequestConverter(),
  new LowerVResponseConverter(),

  new UpperHRequestConverter(),
  new UpperHResponseConverter(),

  new UpperNRequestConverter(),
  new UpperNResponseConverter(),

  new UpperPRequestConverter(),
  new UpperPResponseConverter(),

  new UpperRRequestConverter(),
  new UpperRFullResponseConverter(),
  new UpperRPartialResponseConverter(),

  new UpperVRequestConverter(),
  new UpperVResponseConverter(),
].reduce(
  (map, cur) => {
    const list = map.get(cur.type) || [];

    list.push(cur);

    map.set(cur.type, list);

    return map;
  },
  new Map(),
);
