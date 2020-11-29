const byteToString = (byte) => {
  return `0x${byte.toString(16).padStart(2, '0').toUpperCase()}`;
}

module.exports = byteToString;
