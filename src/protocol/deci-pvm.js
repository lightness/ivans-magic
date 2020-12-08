
class DeciPvm {
  constructor() {
    this.typeOfResult = null;
    this.measurementResult = null;
    this.multiplier = null;
    this.decimalPlacesAndFlags = null;
    this.units = null;
  }

  get decimalPlaces() {
    return this.decimalPlacesAndFlags % 16;
  }

  set decimalPlaces(value) {
    this.decimalPlacesAndFlags = this.flags * 16 + value;
  }

  get flags() {
    return Math.trunc(this.decimalPlacesAndFlags / 16);
  }

  set flags(value) {
    return value * 16 + this.decimalPlaces;
  }
}

module.exports = DeciPvm;
