class Sint16Converter {
  get type() {
    return 'sint16';
  }

  getLength() {
    return 2;
  }

  toBytes(data) {
    const buffer = Buffer.allocUnsafe(this.getLength());

    buffer.writeInt16LE(Number(data));

    return buffer;
  }

  fromBytes(bytes) {
    return bytes.readInt16LE();
  }
}

module.exports = Sint16Converter;
