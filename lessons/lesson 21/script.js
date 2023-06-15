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

// ДЗ. При нажатии на каждую из кнопок менять цвет фона body на соответвующий
//         При нажатии на кнопку img-btn менять фон body на картинку.

//         Обращаться к кнопкам не по отдельно а ко всем одновременно
//             querySelectorAll()

let redBtn = document.querySelector('.red-btn');
document.body.style.backgroundColor = 'red';

let greenBtn = document.querySelector('.green-btn');
document.body.style.backgroundColor = 'green';

let blueBtn = document.querySelector('.blue-btn');
document.body.style.backgroundColor = 'blue';

let yellowBtn = document.querySelector('.yellow-btn');
document.body.style.backgroundColor = 'yellow';

let imgBtn = document.querySelector('.img-btn');
document.body.style.backgroundImage = 'url(img.jpg)';
document.body.style.backgroundSize = '100% 100%';

let btn = document.querySelectorAll('.btn');
btn.addEventListener('click', function () {
  for (let i = 0; i < btn.length; i++) {
    btn = document.body.style[i];
  }
});
