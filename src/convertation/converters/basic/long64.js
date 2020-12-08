class Long64Converter {

  get type() {
    return 'long64';
  }

  get length() {
    return 8;
  }

  toBytes(data) {
    const buffer = Buffer.allocUnsafe(this.length);

    buffer.writeBigUInt64LE(BigInt(data));

    return buffer;
  }

  fromBytes(bytes) {
    console.log('>>> bytes', bytes);
    const bigInt = bytes.readBigUInt64LE();

    return Number(bigInt);
  }
}

module.exports = Long64Converter;
