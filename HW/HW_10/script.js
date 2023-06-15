// 1. Написать цикл, который создает множество параграфов с каждым десятым числом в промежутке от 100 до 50 (т.е. 100, 90, 80, 70, 60, 50). Добавить созданные параграфы в div с классом numbers.
let first = document.querySelector('.first');
first.innerHTML += `1. Написать цикл, который создает множество параграфов с каждым десятым числом в промежутке от 100 до 50 (т.е. 100, 90, 80, 70, 60, 50). Добавить созданные параграфы в div с классом numbers.`;
let num = document.querySelector('.numbers');
function createP() {
  for (let i = 100; i >= 50; i -= 10) {
    num.innerHTML += `<p>${[i]}</p>`;
  }
}
createP();

// Написать цикл, который проходится по массиву строк, для каждой строки создает параграф и добавляет его в div с классом strings_container. Строки взять произвольные.
let second = document.querySelector('.second');
second.innerHTML += `2. Написать цикл, который проходится по массиву строк, для каждой строки создает параграф и добавляет его в div с классом strings_container. Строки взять произвольные.`;

let strings_container = document.querySelector('.strings_container');
function printStr(arr) {
  for (let i = 0; i < arr.length; i++) {
    strings_container.innerHTML += `<p>${arr[i]}</p>`;
  }
}
printStr(['one', 'two', 'three', 'four', 'five']);

// 3. Написать цикл, который проходится по массиву с объектами - у объектов свойства first_name, last_name и  age (данные взять произвольные) - и создает карточки только для совершеннолетних пользователей. Карточка должна содержать информацию об имени, фамилии и возрасте пользователя. Добавить все карточки в div с классом users_container.
let third = document.querySelector('.third');
third.innerHTML += `3. Написать цикл, который проходится по массиву с объектами - у объектов свойства first_name, last_name и  age (данные взять произвольные) - и создает карточки только для совершеннолетних пользователей. Карточка должна содержать информацию об имени, фамилии и возрасте пользователя. Добавить все карточки в div с классом users_container.
<h3>They may go today to the cinema:</h3>`;
const obj = [
  {
    first_name: 'Ann',
    last_name: 'Smith',
    age: 23,
  },
  {
    first_name: 'Sam',
    last_name: 'White',
    age: 13,
  },
  {
    first_name: 'Pit',
    last_name: 'Black',
    age: 25,
  },
];
let users_container = document.querySelector('.users_container');

function createCards(obj) {
  for (let i = 0; i < obj.length; i++) {
    if (obj[i].age > 18) {
      users_container.innerHTML += `<div class = "card">
        <p>Name - ${obj[i].first_name}</p>
        <p>Last Name - ${obj[i].last_name}</p>
        <p>Age - ${obj[i].age}</p>
        </div>`;
    }
  }
}
createCards(obj);
