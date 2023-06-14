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
const sect = document.querySelector('.one');
sect.innerHTML += `<h3>1. Для каждого объекта в массиве products создать разметку</h3>`;
for (let i = 0; i < products.length; i++) {
  sect.innerHTML += `<div class="product">
      <h3> ${products[i].name} </h3>
      <p> ${products[i].category} </p>
      <p> ${products[i].price} </p>
      <button>Купить</button>
  </div>`;
}

const products2 = [
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
const sect2 = document.querySelector('.two');
sect2.innerHTML += `<h3>2. Отобразить только те продукты, цена которых больше 10000</h3>`;
for (let i = 0; i < products2.length; i++) {
  if (products2[i].price > 10000)
    sect2.innerHTML += `<div class="product">
      <h3> ${products[i].name} </h3>
      <p> ${products[i].category} </p>
      <p> ${products[i].price} </p>
      <button>Купить</button>
  </div>`;
}

const products3 = [
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
const sect3 = document.querySelector('.three');
sect3.innerHTML += `<h3>3. Отобразить только те продукты, категория которых - phone</h3>`;
for (let i = 0; i < products3.length; i++) {
  if (products2[i].category == 'phone')
    sect3.innerHTML += `<div class="product">
        <h3> ${products[i].name} </h3>
        <p> ${products[i].category} </p>
        <p> ${products[i].price} </p>
        <button>Купить</button>
    </div>`;
}
