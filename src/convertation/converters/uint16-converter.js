class Uint16Converter {
  constructor() {
    this.type = 'uint16';
  }

  toBytes(data, length = 2) {
    const buffer = Buffer.allocUnsafe(length);

    buffer.writeInt16LE(data);

    return buffer;
  }

  fromBytes(bytes) {
    return bytes.readInt16LE();
  }
}

module.exports = Uint16Converter;
