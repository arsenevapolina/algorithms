const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let count = 0;

function binarySearch(array, item) {
  let start = 0;
  let end = array.length;
  let middle;
  let found = false;
  let position = -1;
  // некий флаг, отображающий, найден ли элемент в массиве
  while (found === false && start <= end) {
    // цикл будет длиться до тех пор пока мы либо не нашли элемент, либо стартовая позиция не поменялась
    count += 1;
    middle = Math.floor((start + end) / 2);
    if (array[middle] === item) {
      found = true;
      position = middle;
      return position;
      // остановка цикла
    }
    if (item < array[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }
  return position;
}

console.log(binarySearch(array, 8));
console.log(count);
// за 1 итерацию

// за 4 итерации можно найти любой элемент в массиве 
