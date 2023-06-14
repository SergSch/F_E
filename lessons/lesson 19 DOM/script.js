// DOM и навигация по DOM

// const title = document.querySelector('h1');
// console.log(title.innerText);
// title.innerText = 'Hello Serg';

// const descr = document.querySelector('.descr');
// console.log(descr);

// Найти элементы
// а) найти тег ссылки на гугл
// б) найти тег с классом footer
// в) найти заголовок в main

// Поменять текст внутри ссылки гугл на "Facebook"
// Поменять текст внутри тега с классом footer на Hello
// Поменять текст внутри h2 на TITLE
// const googleLink = document.querySelector('main a');
// googleLink.innerText = 'Facebook';
// console.log(googleLink);
// const foot = document.querySelector('.footer');
// foot.innerText = 'Hello';
// const titleMain = document.querySelector('h2');
// titleMain.innerText = 'TITLE';

// innerText - свойство получить или назначить текст внутри тега
//     title = {
//         innerText: "Hello World"
//     }
// querySelector() - поиск первого элемента по селектору
//     querySelectorAll() - поиск всех элементов по селектору

//         функция

//         function greeting() {
//             console.log("Hello")
//         }

//         метод

//         let user = {
//             key: value,
//             greeting: function() {
//                 console.log("hello")
//             }
//         }

/*
    числа
    строки
    буль
    объекты (массивы) - 
        let user = {
            name: "Arsen"
        }

    main = {
        className: "main"
        innerHTML: "<h1></h1>"
        style: {
            backgroundColor: "red"
        }
    }
*/

// const title = document.querySelector('h1');
// title.innerText += '. This is my first title';

// const texts = document.querySelectorAll('p');
// for (let i = 0; i < texts.length; i++) {
//   texts[i].innerText = 'Hello, how are you?';
// }

// const googleLink = document.querySelector('main a');
// googleLink.innerText = 'Facebook';
// googleLink.setAttribute('href', 'https://ukr.net');
// const hrefLink = googleLink.getAttribute('href');
// console.log(hrefLink);
// getAttribute(attr) - метод, для получения значение атрибута тега
//         attr - название атрибута, значение которого мы хотим получить
//     setAttribute(attr, value) - метод, для назначения атрибута
//         attr - название атрибута, значение которого мы хотим изменить
//         value - значение, на которое хотим поменять

// Задача. Поменять у всех ссылок текст на Instagram
// Ссылку у всех тегов поменять на https://instagram.com
// const change = document.querySelectorAll('a');
// for (let i = 0; i < change.length; i++) {
//   change[i].innerText = 'Instagram';
//   change[i].setAttribute('href', 'https://instagram.com');
// }
// function func1() {
//   console.log(1);
// }

// function func1() {
//   console.log('buy');
// }
// let button = document.querySelector('#button1');
// button.addEventListener('click', func1);

// let button1 = document.querySelector('#button2');
// button1.addEventListener('mouseover', func2);
// button1.addEventListener('mouseout', func1);
// function func() {
//   console.log('message');
// }
// function func2() {
//   console.log('ku ku');
// }
// function func3() {
//   console.log('Hello');
// }
// let text = document.querySelector('#elem1');
// text.addEventListener('click', func);
// console.log(text.textContent);
// elem1.textContent = '111';
// let text1 = document.querySelector('#elem2');
// text1.addEventListener('click', func);
// let text3 = document.querySelector('#elem');
// text3.addEventListener('click', func);
// text3.addEventListener('click', func2);
// text3.addEventListener('dblclick', func3);

// Задача. Поменять у всех ссылок текст на Instagram
// Ссылку у всех тегов поменять на https://instagram.com

// const title = document.querySelector('h1');
// console.log(title.innerText);
// title.text = 'Hello Serg';

// const descr = document.querySelector('.descr');
// console.log(descr);

// const a = document.querySelector('main a');
// a.textContent = 'Facebook';
// const b = document.querySelector('.footer');
// b.innerText = 'Hello';
// const c = document.querySelector('h2');
// c.textContent = 'TITLE';

// const title = document.querySelector('h1');
// title.innerText += '. This is my first Title';

// const texts = document.querySelectorAll('p');
// for (let i = 0; i < texts.length; i++) {
//   texts[i].innerText = 'Hello, how are you?';
// }

// const link = document.querySelector('main a');
// link.innerText = 'Fasebook';
// link.setAttribute('href', 'https://fb.com');

// const link = document.querySelectorAll('a');
// for (let i = 0; i < link.length; i++) {
//   link[i].innerText = 'Instagram';
//   link[i].setAttribute('href', 'https://instagram.com');
// }
