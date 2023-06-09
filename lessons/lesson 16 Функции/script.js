// function makeFood() {
//   console.log('Cut vegetables');
//   console.log('Boil vegetables');
//   console.log('Put mayonez');
//   console.log('cook');
// }

// makeFood();

// function greeting(name) {
//   const newName = name.toUpperCase();
//   console.log('Hello, ' + newName);
// }
// const a = greeting('serg');

// function calc(num1, num2) {
//   console.log(num1 + num2);
//   console.log(num1 - num2);
//   console.log(num1 * num2);
//   console.log(num1 / num2);
// }
// calc(94, 34);
// calc(50, 5);

// function numbers(num1, num2) {
//   if (num1 > num2) {
//     console.log(num1);
//   } else {
//     console.log(num2);
//   }
// }
// numbers();

// Задача. Создать функцию, которая принимает число и выводит все числа от 0 до числа,
// которое принимаем в параметре
// function number(num) {
//   for (let i = 0; i < num; i++) {
//     console.log(i);
//   }
// }
// number(3);

// Задача. Создать функцию, которая принимает массив и отображает каждый элемент массива
// в консоли
// function letArr(arr1) {
//   for (let i = 0; i < arr1.length; i++) {
//     console.log(arr1[i]);
//   }
// }

// letArr([1, 4, 6]);

// Задача. Создать функцию подсчета площади комнаты.
// Она должна принимать длину и ширину, а в консоли отображать площадь
// площадь равна произведению ширины на длину. S = a * b
// function calcRoom(lenght, wide) {
//   console.log(lenght * wide);
// }
// calcRoom(4, 5);

// Задача. Создать функцию, которая будет поздравлять пользователя с днем рождения
// Она должна принимать имя пользователя и в консоли отображать поздравление
// function gratuedBirthday(name) {
//   console.log(`Hello, ${name}, Happy Birthday!`);
// }
// gratuedBirthday('Anna');

// Задача. Создать функцию, которая получает число и в консоли отображает "Четное", если
// число четное, иначе - "Нечетное"
// function printEven(num) {
//   if (num % 2 == 0) {
//     console.log('Even Number');
//   } else {
//     console.log('Odd');
//   }
// }
// printEven(5);

// Задача. Создать функцию, которая принимает число и выводит массив с числами
// от 0 до этого числа.
// function printArr(number) {
//   let a = [];
//   for (let i = 0; i < number; i++) {
//     a.push(i);
//   }
//   console.log(a);
// }
// printArr(5);

/*
    show - показать
    get - получить
    delete - удалить
    change - изменить
    print - распечатать
    add - добавить
    edit - редактировать 
    calc - посчитать
*/

// function editNames() {
//   let arr = [];
//   for (let i = 0; i < 3; i++) {
//     let a = prompt('Name?');
//     arr[a].toUpperCase();
//   }
//   console.log(arr);
// }
// editNames();

// function printName() {
//   let arr = [];
//   for (let i = 0; i < 3; i++) {
//     const name = prompt('Name?');
//     const upperCase = name.toUpperCase();
//     arr.push(upperCase);
//   }
//   console.log(arr);
// }
// printName();

// Задача. Создать функцию, которая запрашивает у пользователя 3 имени, с помощью for.
// Каждое введенное имя перевести в верхний регистр - toUpperCase()
// Создать массив, в который положить все имена в верхнем регистре
// В консоли отобразить итоговый массив

// function printNames() {
//   const names = [];
//   for (let i = 0; i < 3; i++) {
//     const name = prompt('Введите ваше имя');
//     const upperCasedName = name.toUpperCase();
//     names.push(upperCasedName);
//   }
//   console.log(names);
// }
// printNames();

/*
    1. let i = 0; 0 < 3 - true, const name = prompt("Введите ваше имя") -> 
            upperCasedName = "ARSEN"
            names.push("ARSEN") -> ["ARSEN"]
            , i++

    2. i = 1; 1 < 3 - true, prompt("Введите ваше имя")
            upperCasedName = "MARIA"
            names.push("MARIA") -> ["ARSEN", "MARIA"]
            , i++

    3. i = 2; 2 < 3 - true, prompt("Введите ваше имя"),
            upperCasedName = "VIKTOR",
            names.push("VIKTOR") -> ["ARSEN", "MARIA", "VIKTOR"]
            i++

    4. i = 3; 3 < 3 - false. 
*/

// Задача. Создать функцию, которая запрашивает у пользователя 3 имени, с помощью for.
// Каждое введенное имя перевести в верхний регистр - toUpperCase()
// Создать массив, в который положить все имена в верхнем регистре
// В консоли отобразить итоговый массив

// function names() {
//   let arr = [];
//   for (let i = 0; i < 3; i++) {
//     let a = prompt('Name');
//     let upperC = a.toUpperCase();
//     upperC.push(arr);
//   }
//   console.log(arr);
// }
// names();
