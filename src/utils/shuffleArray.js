const shuffleArray = (arr, hash) => {
  const arrCopy = [...arr];
  const newArray = [];
  let count = 0;
  let index = 0;
  let entry;

  while (count++ < 25) {
    // entry = arrCopy[copyLength % hash];

    index = (index + hash) % arrCopy.length;
    entry = arrCopy.splice(index, 1)[0];
    newArray.push(entry);
  }

  return newArray;
};

export default shuffleArray;
