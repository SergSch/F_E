// const player1 = {
//   name: 'Usein',
//   health: 100,
//   illnes: 90,
// };
// const player2 = {
//   name: 'Mike',
//   health: 70,
//   illnes: 150,
// };

// function sum(num1, num2) {
//   return num1 + num2;
// }
// alert(sum(10, 4));

// Задача. Написать функцию, которая возвращает сумму четных чисел от 1 до 10
// function sum() {
//   let a = 0;
//   for (let i = 0; i <= 10; i++) {
//     if (i % 2 == 0) {
//       a += i;
//     }
//   }
//   return a;
// }
// console.log(sum());

// Задача. Написать функцию, которая принимает массив чисел (оценок студента) и возвращает его средний балл
// function mittleGr(arr) {
//   let a = 0;
//   for (let i = 0; i < arr.length; i++) {
//     a += arr[i];
//   }
//   return a / arr.length;
// }
// console.log(mittleGr([3, 4, 5]));

// Задача. Написать функцию, которая массив игроков (объектов), со след/полями: имя_пользователя, ущерб и выводит среднее значение ущерба для них
// const arr = [
//   {
//     name: 'Usein',
//     health: 100,
//     illnes: 90,
//   },
//   {
//     name: 'Mike',
//     health: 70,
//     illnes: 150,
//   },
//   {
//     name: 'Serg',
//     health: 80,
//     illnes: 50,
//   },
// ];
// function averagePl(arr) {
//   let a = 0;
//   for (let i = 0; i < arr.length; i++) {
//     a += arr[i].illnes;
//   }
//   return a / arr.length;
// }
// const finish = averagePl(arr);
// console.log(`Средний ущерб игроков составляет ${finish}`);

// Задача. Вывести информацию о пользователях
// const users = [
//   ['Ivan', 20, 'ivan@example.org'],
//   ['Petr', 30, 'petr@example.org'],
//   ['Pavel', 40, 'pavel@example.org'],
// ];
// function usersInfo() {
//   console.log(`Name first user is ${users[0][0]}`);
//   console.log(`Age first user is ${users[2][1]}`);
//   console.log(`Email first user is ${users[1][2]}`);
// }
// usersInfo();

// Задача. Написать функцию, которая применяет скидку (возвращает значение со скидкой)
// function discount(order, disc) {
//   let a = 100 - order / disc;
//   return a;
// }
// let b = discount(100, 10);
// console.log(b);

// Задача. Написать функцию, которая получает товар (объект) с ценой в EUR и возвращает его стоимость (скаляр) в USD
// const product = { title: 'Product 1', price: 500, quantity: 10 };
// function currency_exchange() {
//   return product.price * 0.9;
// }
// console.log(currency_exchange(product));

// Задача. Написать функцию, которая принимает радиус и возвращает площадь окружности с указанным радиусом
// function calcRad(rad) {
//   return rad ** 2 * 3.14;
// }
// console.log(calcRad(5));

// Задача. Напишите функцию, которая получает массив различных чисел (положительных и отрицательных) и возвращает массив отрицательных чисел
// const arr = [4, 5, -3, -5, 8];
// function choiseOdd(ar) {
//   let a = [];
//   for (let i = 0; i < ar.length; i++) {
//     if (ar[i] < 0) {
//       a.push(ar[i]);
//     }
//   }
//   return a;
// }
// console.log(choiseOdd(arr));

// Задача. Запросить у сотрудника (логичистической компании) ко-во часов полета транспортного средства (самолета) и вывести время, в которое он вернется назад
// function planeCome() {
//   let hours = +prompt('How long will fly the plane?');
//   return hours % 24;
// }
// let time = planeCome();
// console.log(`The plane come back at ${time} o'clock`);

// Напишите функцию которая проверяет, отрицательное число или нет (возвращает true/false)
function positive() {
  let a = +prompt('Number?');
  if (a > 0) {
    console.log(true);
  } else {
    console.log(false);
  }
  return;
}
positive();

// // Запросить у пользователя произвольное число и вывести его, если последняя цифра, на которую оно заканчивается, равна 8
function lastNumber() {
  let a = prompt('Number');
  if (a[a.length - 1] == 8) {
    console.log(a);
  }
  return;
}
lastNumber();

// // Описать массив (набор) трех пользователей со след/характеристиками возраст, з/п, email и вывести возраст последнего (в наборе) пользователя
const users = [
  {
    age: 23,
    salary: 2500,
    email: 'example@mail',
  },
  {
    age: 25,
    salary: 2800,
    email: 'example234@mail',
  },
  {
    age: 27,
    salary: 3000,
    email: 'exampleasgas@mail',
  },
];
function usersAge() {
  return users[2].age;
}
console.log(usersAge());

// // Напишите функцию, которая получает массив различных чисел (положительных и отрицательных) и возвращает массив отрицательных чисел
function evenOrOdd(arr) {
  let a = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      a.push(arr[i]);
    }
  }
  return a;
}
console.log(evenOrOdd([1, 3, 5, -4, -5, -9, 8]));

// // Запросить у сотрудника (логичистической компании) ко-во часов полета транспортного средства (самолета) и вывести время, в которое он вернется назад
function returnTime() {
  let a = +prompt('Time?');
  let b = a % 24;
  return b;
}
let c = returnTime();
console.log(`The plane come back at ${c} o'clock!`);

// // Написать функцию, которая принимает товары (массив объектов) и возвращает строку Самый дорогой товар <НАЗВАНИЕ> стоит <NN> EUR
const articles = [
  {
    name: 'lg',
    price: 3000,
  },
  {
    name: 'sony',
    price: 5000,
  },
  {
    name: 'samsung',
    price: 10000,
  },
];
function expansiveArticle() {
  if (
    articles[0].price > articles[1].price ||
    articles[0].price > articles[2].price
  ) {
    console.log(
      `The most expancive article ${articles[0].name} costs ${articles[0].price} EUR`
    );
  } else if (
    articles[1].price > articles[0].price ||
    articles[1].price > articles[2].price
  ) {
    console.log(
      `The most expancive article ${articles[1].name} costs ${articles[1].price} EUR`
    );
  } else {
    console.log(
      `The most expancive article ${articles[2].name} costs ${articles[2].price} EUR`
    );
  }
  return;
}
expansiveArticle();

// // Написать функцию, которая принимает два числа в качестве диапазона и возвращает сумму нечетных чисел в указанном диапазоне
function oddNumbers(first, second) {
  let a = 0;
  for (let i = first; i < second; i++) {
    if (i % 2 == 1) {
      a += i;
    }
  }
  return a;
}
console.log(oddNumbers(1, 11));

// // Написать программу, которая описывает массив двух игроков, со след/полями: имя_пользователя, ущерб и сравнивает их ущерб между собой (у кого шансов на победу больше)
const players = [
  {
    name: 'Ben',
    damage: 40,
  },
  {
    name: 'Sam',
    damage: 30,
  },
];
function comparePlayer() {
  if (players[0].damage > players[1].damage) {
    console.log(`Ben has more chanses on the victory!`);
  } else {
    console.log(`Sam has more chanses on the victory!`);
  }
  return;
}
comparePlayer();
