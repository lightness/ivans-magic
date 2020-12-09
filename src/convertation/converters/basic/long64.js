class Long64Converter {

  get type() {
    return 'long64';
  }

  getLength() {
    return 8;
  }

  toBytes(data) {
    const buffer = Buffer.allocUnsafe(this.getLength());

    buffer.writeBigUInt64LE(BigInt(data));

    return buffer;
  }

  fromBytes(bytes) {
    const bigInt = bytes.readBigUInt64LE();

    return Number(bigInt);
  }
}

module.exports = Long64Converter;
