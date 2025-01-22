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




// Рекурсивный способ реализации алгоритма бинарного поиска 

function recursiveBinarySearch(array, item, start, end) {
  // item - элемент, к-ый ищем
  let middle = Math.floor((start + end) / 2);
  // вычисляем центральный элемент 
  count += 1;
  if (item === array[middle]) {
    return middle;
    /*
    Проверка: если искомый элемент = элементу, 
    к-ый лежит в массиве по центральному индексу, к-й мы высчитали, 
    то возвраащем позицию этого элемента - она будет = позиции центрального элемента. 
    */
  }
  if (item < array[middle]) {
    return recursiveBinarySearch(array, item, 0, middle - 1);
    // 0 - стартовая позиция, middle (центральный индекс) - 1 - конечная позиция 
  } else {
    return recursiveBinarySearch(array, item, middle + 1, end);
  }
}

console.log(recursiveBinarySearch(array, 0, 0, array.length));
console.log(count);
