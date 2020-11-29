const Table = require("cli-table2");

const fsPresenter = require("./fs-presenter");
const fePresenter = require("./fe-presenter");
const crcPresenter = require("./crc-presenter");
const headerPresenter = require("./header-presenter");
const payloadPresenter = require("./payload-presenter");

module.exports = (frame) => {
  const table = [
    fsPresenter(),
    headerPresenter(frame),
    payloadPresenter(frame),
    crcPresenter(frame.crc),
    fePresenter(),
  ].reduce(
    (t, fn) => fn(t),
    new Table(),
  );

  return table;
};
