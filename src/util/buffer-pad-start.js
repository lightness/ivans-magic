const padStart = (buffer, length, byte) => {
  let data = Buffer.from(buffer);

  while (data.length < length) {
    data = Buffer.from([
      byte,
      ...data,
    ]);
  }

  return data;
};

module.exports = padStart;