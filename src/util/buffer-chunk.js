const chunk = (buffer, chunkSize) => {
  let data = Buffer.from(buffer);
  const arr = [];
  
  while (data.length > 0) {
    arr.push(data.slice(0, chunkSize));
    data = data.slice(chunkSize);
  }

  return arr;
}

module.exports = chunk;
