class Uint16Converter {
  get type() {
    return 'uint16';
  }

  get length() {
    return 2;
  }

  toBytes(data) {
    const buffer = Buffer.allocUnsafe(this.length);

    buffer.writeUInt16LE(Number(data));

    return buffer;
  }

  fromBytes(bytes) {
    return bytes.readUInt16LE();
  }
}

module.exports = Uint16Converter;
