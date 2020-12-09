class Sint32Converter {
  get type() {
    return 'sint32';
  }

  getLength() {
    return 4;
  }

  toBytes(data) {
    const buffer = Buffer.allocUnsafe(this.getLength());

    buffer.writeInt32LE(Number(data));

    return buffer;
  }

  fromBytes(bytes) {
    return bytes.readInt32LE();
  }
}

module.exports = Sint32Converter;
