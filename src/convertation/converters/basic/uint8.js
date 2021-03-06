class Uint8Converter {
  get type() {
    return 'uint8';
  }

  getLength() {
    return 1;
  }

  toBytes(data) {
    const buffer = Buffer.allocUnsafe(this.getLength());

    buffer.writeUInt8(data);

    return buffer;
  }

  fromBytes(bytes) {
    return bytes.readUInt8();
  }
}

module.exports = Uint8Converter;
