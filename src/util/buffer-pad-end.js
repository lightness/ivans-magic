const padEnd = (buffer, length, byte) => {
  let data = Buffer.from(buffer);

  while (data.length < length) {
    data = Buffer.from([
      ...data,
      byte,
    ]);
  }

  return data;
};

module.exports = padEnd;