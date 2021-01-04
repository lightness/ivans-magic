const {
  DECI_PVM_TYPE_OF_RESULT,
  DECI_PVM_FLAG,
  DECI_PVM_MULTIPLIER,
  DECI_PVM_UNITS,
} = require('./constants');

class DeciPvm {
  constructor(values = {}) {
    this.typeOfResult = values.typeOfResult || null;
    this.measurementResult = values.measurementResult || null;
    this.multiplier = values.multiplier || null;
    this.decimalPlacesAndFlags = values.decimalPlacesAndFlags || null;
    this.units = values.units || null;
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

  toString() {
    const typeOfResultItem = Object.entries(DECI_PVM_TYPE_OF_RESULT)
      .find(([, value]) => value === this.typeOfResult);
    const typeOfResultString = typeOfResultItem ? typeOfResultItem[0] : 'UNKNOWN';
    
    const value = (this.measurementResult / Math.pow(10, this.decimalPlaces))
      .toExponential()
      .replace('e+0', '')
      .replace('e+', ' * 10^')
      .replace('e-', ' * 10^-');

    const flagItem = Object.entries(DECI_PVM_FLAG)
      .find(([, value]) => value === this.flags);
    const flagString = flagItem ? flagItem[0] : '';

    const multiplierItem = Object.entries(DECI_PVM_MULTIPLIER)
      .find(([, value]) => value === this.multiplier);
    const multiplierString = multiplierItem ? multiplierItem[0] : '';

    const unitsItem = Object.entries(DECI_PVM_UNITS)
      .find(([, value]) => value === this.units);
    const unitsString = unitsItem ? unitsItem[0] : '';

    return `${typeOfResultString} ${flagString || '='} ${value} ${multiplierString}${unitsString}`;
  }
}

module.exports = DeciPvm;
