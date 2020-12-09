class Uint16Converter {
  get type() {
    return 'uint16';
  }

  getLength() {
    return 2;
  }

  toBytes(data) {
    const buffer = Buffer.allocUnsafe(this.getLength());

    buffer.writeUInt16LE(Number(data));

    return buffer;
  }

  fromBytes(bytes) {
    return bytes.readUInt16LE();
  }
}

module.exports = Uint16Converter;
