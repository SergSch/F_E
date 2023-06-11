// const names = ['Alex', 'Yulia', 'Arsen'];
// console.log(names[1]);

// const numbers = [10, 15, 0, 100, 21];
// console.log(numbers[2]);

// const arr = ['Hello', 42, true,['hi', 'Hello World']];
// console.log(arr[3][1])

// const counties = ['Germany', 'France', 'UK'];
// console.log(counties.length)
// counties.push('Spain');
// console.log(counties.length - 1);
// console.log(counties[counties.length - 1]);

// const names = ['Alexander', 'Yuliya', 'Arsen'];
// const a = prompt('Name?');
// const b = prompt('Name?');
// names.push(a, b);
// console.log(names);

// for (let i = 0; i < 10; i++) {
//   console.log('hello');
// }
// цикл for

//     for(инициализация; условие; шаг) {
//         тело цикла
//     }

//         1. инициализация - создаем счетчик. let i - iteration, итерация - повторение
//         2. условие - момент до которого наш счетчик должен выполняться
//         3. шаг - после каждого действия, увеличиваем шаг счетчика до момента завершения
//             i++ - увеличение переменной на 1

//         Алгоритм работы цикла:
//             1. Выполняется начало - let i = 0
//             2. Выполняется условие - i < 10
//                 Если условие true - выполняется действие в теле цикла - console.log("Hello")

//             3. Выполняется шаг - увеличение переменной i на 1, Опять переходим к пункту 2

//              Если false - выход из цикла

//         let i = 0
//         i = i + 1 // 1
//         i+= 1
//         i++ - инкремент

//         i = i + 2
//         i += 2

// for (let i = 0; i < 50; i++) {
//   console.log('Hello World');
// }

// for (let i = 0; i < 5; i++) {
//   console.log(i + 1);
// }

// for (let i = 0; i < 100; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

// const names = ['Arsen', 'Sergey', 'Bogdan'];
// for (let i = 0; i < names.length; i++) {
//   console.log(names[i]);
// }

// const numbers = [10, 20, 5, 11, 6, 4];
// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i] ** 2);
//   console.log(Math.pow(numbers[i], 2));
// }

// const counties = ['Germany', 'France', 'Spain', 'Chech'];
// for (let i = 0; i < counties.length; i++) {
//   console.log(counties[i].toUpperCase());
// }

// toUpperCase() ---- выводдит значение строк в верхний регистр

// const countries = ['Germany', 'France', 'Spain', 'Chech'];
// for (let i = 0; i < countries.length; i++) {
//   const upperCaseCountry = countries[i].toUpperCase();
//   console.log(upperCaseCountry);
//   countries.push(upperCaseCountry);
//   console.log(upperCaseCountry); // если хотим заполнить другой массив странами в верхнем регистре
// }

// for (let i = 0; i < 10; i++) {
//   if (i == 5) {
//     console.log('break');
//     break;
//   }
//   console.log(i);
// }
