const Long64Converter = require("./long64");

class DatetimeConverter extends Long64Converter {
  get type() {
    return 'datetime';
  }

  toBytes(data) {
    const timestamp = new Date(data).getTime();

    return super.toBytes(timestamp);
  }

  fromBytes(bytes) {
    const timestamp = super.fromBytes(bytes);

    try {
      return new Date(timestamp).toISOString();
    } catch (error) {
      return new Date(0).toISOString();
    }
  }
}

module.exports = DatetimeConverter;
