function sumItems(array) {
  let total = 0;
  array.forEach(element => {
    if (Array.isArray(element)) {
      total += sumItems(element);
    } else {
      total += element;
    }
  });
  return total;
}

module.exports = sumItems;