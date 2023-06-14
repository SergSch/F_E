//1. Напишите функцию, которая принимает два числовых аргумента и выводит в консоль все четные числа от большего к меньшему.
function printNumbers(val_1, val_2) {
  let start;
  let end;
  if (val_1 > val_2) {
    start = val_1;
    end = val_2;
  } else {
    start = val_2;
    end = val_1;
  }
  for (let i = start; i >= end; i--) {
    if (i % 2 == 0) {
      console.log(i);
    }
  }
}
printNumbers(3, 15);

// 2. Напишите функцию power, которая принимает два числовых аргумента (основание степени и саму степень) и возвращает число в указанной степени. Значение степени должно быть указано по умолчанию 2.
function power(val_1, val_2 = 2) {
  val_1 = +prompt('Your number?');
  return val_1 ** val_2;
}
console.log(power());

//3.  Напишите функцию, которая принимает числовой аргумент n и считает сумму чисел от 1 до n.
function sumNumbers(n) {
  let res = 0;
  for (let i = 1; i < n; i++) {
    res += i;
  }
  return res;
}
console.log(sumNumbers(5));

// 4. Напишите функцию, которая принимает два числовых аргумента n и m и считает сумму четных чисел и нечетных чисел от n до m. Суммы выведите в консоль (в начале сумму четных чисел, а затем сумму нечетных).
function plusNumbers(n, m) {
  let evenNum = 0;
  let oddNum = 0;
  n = +prompt('Number?');
  m = +prompt('Number?');
  let start;
  let end;
  if (n > m) {
    start = m;
    end = n;
  } else {
    start = n;
    end = m;
  }
  for (let i = start; i < end; i++) {
    if (i % 2 == 0) {
      evenNum += i;
    } else if (i % 2 == 1) {
      oddNum += i;
    }
  }
  console.log(evenNum);
  console.log(oddNum);
}
plusNumbers();

// 5. Напишите функцию, которая принимает в качестве аргументов массив строк, а возвращает первый самый длинный элемент массива. Если входной массив пуст, функция возвращает null. Если есть несколько одинаковых по длине элементов - функция возвращает первый из этих элементов. (string.length > string.length) - сравнение длины строк
// Пример: [ 'one', 'two', 'three' ] => 'three'
function printLongString(arr) {
  if (arr.length > 0) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i].length > max.length) {
        max = arr[i];
      }
    }
    return max;
  } else {
    return null;
  }
}
console.log(printLongString(['one', 'two', 'three']));
