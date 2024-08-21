function fibs(n) {
  let array = [];

  for (let i = 0; i < n + 1; i++) {
    if (i <= 1) {
      array.push(i);
    } else {
      array.push(array[i - 1] + array[i - 2]);
    }
  }

  return array;
}

function fibsRec(n, array = [0, 1]) {
  if (n === 0) return [0];
  if (n === 1) return array;

  array.push(array[array.length - 1] + array[array.length - 2]);
  return fibsRec(n - 1, array);
}

function merge(left, right) {
  let sortedArray = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sortedArray.push(left.shift());
    } else {
      sortedArray.push(right.shift());
    }
  }

  return [...sortedArray, ...left, ...right];
}

function mergeSort(array) {
  console.log("This was printed recursively");
  if (array.length <= 1) return array;

  const mid = Math.floor(array.length / 2);
  const left = array.slice(0, mid);
  const right = array.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

console.log(mergeSort([3,2,1,13,8,5,0,1]))