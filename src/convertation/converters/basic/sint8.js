class Sint8Converter {
  get type() {
    return 'sint8';
  }

  getLength() {
    return 1;
  }

  toBytes(data) {
    const buffer = Buffer.allocUnsafe(this.getLength());

    buffer.writeInt8(Number(data));

    return buffer;
  }

  fromBytes(bytes) {
    return bytes.readInt8();
  }
}

module.exports = Sint8Converter;
