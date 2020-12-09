const DatetimePoll = require("./polls/datetime");
const DeciPvmPoll = require("./polls/deci-pvm");
const FramePoll = require("./polls/frame");
const ResultPoll = require("./polls/result");
const Sint8Poll = require("./polls/sint8");
const Sint32Poll = require("./polls/sint32");
const StringPoll = require("./polls/string");
const StructurePoll = require("./polls/structure");
const Uint16Poll = require("./polls/uint16");
const Uint8Poll = require("./polls/uint8");

module.exports = [
  new StringPoll(),
  new Uint16Poll(),
  new Uint8Poll(),
  new Sint8Poll(),
  new Sint32Poll(),
  new DatetimePoll(),
  new ResultPoll(),
  new FramePoll(),
  new StructurePoll(),
  new DeciPvmPoll(),
].reduce(
  (acc, cur) => {
    acc.set(cur.type, cur);

    return acc;
  },
  new Map(),
);
