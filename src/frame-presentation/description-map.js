const { red } = require("chalk");

class DesciptionMap {
  constructor(nameToByte) {
    this.nameToByte = nameToByte;
  }

  toByte(name) {
    return this.nameToByte[name];
  }

  toName(byte) {
    const entry = Object.entries(this.nameToByte)
      .find(([, value]) => value === byte);

    return entry ? entry[0] : red('unknown');
  }
}

module.exports = DesciptionMap;
