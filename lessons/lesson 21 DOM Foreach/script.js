// Задача. при клике на кнопку btn, в консоли отобразить "приветствую!"
/*
const btn = document.querySelector('.btn');
btn.addEventListener('click', function () {
  console.log('Hello!');
});
    addEventListener - метод, который позволяет вызвать функцию по происшествии какого-либо события

    addEventListener(type, cb) - принимает два аргумента
    type - тип события - click, scroll, submit, change, input
    cb - callback function - функция обратного вызова, функцию вызываем не мы, а какая-то другая функция
*/

// Задача. При нажатии на кпноку btn увеличивать значение в p.text на 1

/*
    1. Создаем переменную для хранения текущего значения числа
    2. При клике увеличиваем переменную на 1
        2.1. Повесить слушатель события на кнопку
        2.2. Вызывать cb функцию, которая увеличивает переменную на 1
    3. меняем текст в теге p на значение переменной
    // а при нажатии на минус 1 уменьшать значение в p.text на 1
 */
// let btn = document.querySelector('.btn');
// let text = document.querySelector('.text');
// let btnMinus = document.querySelector('.btn-minus');
// let num = 0;
// btn.addEventListener('click', function () {
//   num++;
//   text.innerText = num;
// });

// btnMinus.addEventListener('click', function () {
//   text.innerText = num;
//   if (num > 0) {
//     num--;
//   }
// });

// ДЗ. При нажатии на каждую из кнопок менять цвет фона body на соответвующий
//         При нажатии на кнопку img-btn менять фон body на картинку.

//         Обращаться к кнопкам не по отдельно а ко всем одновременно
//             querySelectorAll()

// let redBtn = document.querySelector('.red-btn');
// redBtn.addEventListener('click', function () {
//   document.body.style.backgroundColor = 'red';
//   redBtn.style.color = 'black';
// });

// let greenBtn = document.querySelector('.green-btn');
// greenBtn.addEventListener('click', function () {
//   document.body.style.backgroundColor = 'green';
//   greenBtn.style.color = 'black';
// });

// let blueBtn = document.querySelector('.blue-btn');
// blueBtn.addEventListener('click', function () {
//   document.body.style.backgroundColor = 'blue';
//   blueBtn.style.color = 'black';
// });

// let yellowBtn = document.querySelector('.yellow-btn');
// yellowBtn.addEventListener('click', function () {
//   document.body.style.backgroundColor = 'yellow';
//   yellowBtn.style.color = 'black';
// });

// let imgBtn = document.querySelector('.img-btn');
// imgBtn.addEventListener('click', function () {
//   imgBtn.style.color = 'black';
//   document.body.style.backgroundImage = 'url(img.jpg)';
//   document.body.style.backgroundSize = '100% 100%';
//   document.body.style.backgroundColor = 'yellow';
// });

// ДЗ. При нажатии на каждую из кнопок менять цвет фона body на соответвующий-------------------------------
//         При нажатии на кнопку img-btn менять фон body на картинку.

//         Обращаться к кнопкам не по отдельно а ко всем одновременно
//             querySelectorAll()
const buttons = document.querySelectorAll('button');
// for (let i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener('click', function () {
//     if (buttons[i].id == 'img') {
//       document.body.style.background = 'url(./img.jpg)';
//     } else {
//       const color = buttons[i].id;
//       document.body.style.background = color;
//     }
//   });
// }
// ------------------------------------------------------------------------------------------------------
// buttons.forEach(function (button) {
//   button.addEventListener('click', function () {
//     if (button.id == 'img') {
//       document.body.style.background = 'url(./img.jpg)';
//     } else {
//       const color = button.id;
//       document.body.style.background = color;
//     }
//   });
// });

// Есть массив names, нужно отобразить каждый элемент массива в консоли-------------------------------------
// const names = ['Arsen', 'Bogdan', 'Aliaksei', 'Botirjon'];
// names.forEach(function (item) {
//   console.log(item);
// });

// forEach(item, index, arr) принимает три аргумента
// 1. item - каждый элемент массива, текущий элемент; (array[i]) - каждый элемент массива в for
// 2. index -  индекс текущего элемента
// 3. arr - сам массив, над которым выполняем действия
// */

// Есть массив чисел numbers. FOREACH------------------------------------------------------------------------
// вывести в консоли
// а) вывести числа больше 60
// б) квадрат каждого числа
// const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// numbers.forEach(function (item) {
//   if (item > 60) {
//     console.log(item);
//   }
//   console.log(item ** 2);
// });
