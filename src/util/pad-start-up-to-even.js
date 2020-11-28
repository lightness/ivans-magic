const padStartUpToEven = (string, char) => {
  if (string.length % 2 === 0) {
    return string;
  } else {
    return `${char}${string}`;
  }
};

module.exports = padStartUpToEven;
