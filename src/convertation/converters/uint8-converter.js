class Uint8Converter {
  constructor() {
    this.type = 'uint8';
  }

  toBytes(data, length = 1) {
    const buffer = Buffer.allocUnsafe(length);

    buffer.writeInt8(data);

    return buffer;
  }

  fromBytes(bytes) {
    return bytes.readInt8();
  }
}

module.exports = Uint8Converter;
