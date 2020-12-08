class Uint8Converter {
  get type() {
    return 'uint8';
  }

  get length() {
    return 1;
  }

  toBytes(data) {
    const buffer = Buffer.allocUnsafe(this.length);

    buffer.writeUInt8(data);

    return buffer;
  }

  fromBytes(bytes) {
    return bytes.readUInt8();
  }
}

module.exports = Uint8Converter;
