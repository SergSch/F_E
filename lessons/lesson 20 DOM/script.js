// const head = document.querySelector('header');
// const title = document.createElement('h1');
// title.innerText = 'My title';
// head.appendChild(title);
/*
    innerText - свойстсво текста внутри тега

    Алгоритм создания элемента
        1. Находим элемент, в который хотим положить созданный тег. querySelector()
        2. Создаем тег. createElement()
        3. Добавляем текст. innerText
        4. Добавляем созданный тег в найденный в п1 тег. appendChild()
*/

// const main = document.querySelector('main');
// console.log(main);
// const header = document.querySelector('header');
// header.innerHTML = '<h1> My Title </h1>';

// Задача. Создать цикл, который позволяет добавить 10 тегов p с тектом HELLO внутрь section
// const sect = document.querySelector('section');
// for (let i = 0; i < 10; i++) {
//   sect.innerHTML += '<p>Hello</p>';
// }

// Зачада. Есть массив имен names. Для каждого имени создать тег p и добавить его в section
// const names = ['Arsen', 'Yuliya', 'Lana', 'Maria'];
// const sect = document.querySelector('section');
// for (let i = 0; i < names.length; i++) {
//   sect.innerHTML += `<p class = "text">${names[i]}</p>`;
// }

// Задача. Есть массив объектов prodcuts. Для каждого продукта создать разметку и добавить вконце общую цену
// const products = [
//   {
//     name: 'Iphone 13',
//     price: 10000,
//   },
//   {
//     name: 'Iphone 14',
//     price: 20000,
//   },
//   {
//     name: 'Iphone 15',
//     price: 25000,
//   },
// ];
// const sect = document.querySelector('section');
// let a = 0;
// for (let i = 0; i < products.length; i++) {
//   a += products[i].price;
//   sect.innerHTML += `<div class = "product">
//   <h5>${products[i].name}</h5>
//     <p>${products[i].price}</p>
//     </div>`;
// }
// sect.innerHTML += `<h1>Summe is ${a}</h1>`;
/*
    <div class="product">
        <h5>Назввание продукта</h5>
        <p>Цена продукта</p>
    </div>
*/
// Задача. Есть массив products.
// 1. Для каждого объекта в массиве products создать разметку
// 2. Отобразить только те продукты, цена которых больше 10000
// 3. Отобразить только те продукты, категория которых - phone

const products = [
  {
    name: 'Iphone 13',
    category: 'phone',
    price: 15000,
  },
  {
    name: 'Iphone 14',
    category: 'phone',
    price: 20000,
  },
  {
    name: 'Acer',
    category: 'laptop',
    price: 40000,
  },
  {
    name: 'Asus',
    category: 'laptop',
    price: 35000,
  },
  {
    name: 'Samsung',
    category: 'TV',
    price: 27000,
  },
  {
    name: 'LG',
    category: 'TV',
    price: 7000,
  },
];
const sect = document.querySelector('section');
for (let i = 0; i < products.length; i++) {
  sect.innerHTML += `<div class="product">
    <h3> ${products[i].name} </h3>
    <p> ${products[i].category} </p>
    <p> ${products[i].price} </p>
    <button>Купить</button>
</div>`;
}
for (let i = 0; i < products.length; i++) {
  if (products[i].price > 10000) {
    sect.innerHTML;
  }
}
/*
    <div class="product">
        <h3> {имя продукта} </h3>
        <p> {категория продукта} </p>
        <p> {цена продукта} </p>
        <button>Купить</button>
    </div>
*/
