class Long64Converter {
  constructor() {
    this.type = 'long64';
  }

  toBytes(data, length = 8) {
    const buffer = Buffer.allocUnsafe(length);

    buffer.writeBigUInt64LE(BigInt(data));

    return buffer;
  }

  fromBytes(bytes) {
    const bigInt = bytes.readBigUInt64LE();

    return Number(bigInt);
  }
}

module.exports = Long64Converter;
