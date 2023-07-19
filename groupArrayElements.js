function groupArrayElements(array, N) {
  const result = [];
  const arrayLength = array.length;
  const chunkSize = Math.ceil(arrayLength / N);
  let index = 0;

  while (index < arrayLength) {
    result.push(array.slice(index, index + chunkSize));
    index += chunkSize;
  }

  return result;
}

const array = [1, 2, 3, 4, 5];
const N = 3;

const dividedArrays = groupArrayElements(array, N);
console.log(dividedArrays);
