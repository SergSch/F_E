const form = document.querySelector('form');
const productName = document.querySelector('.product-name');
const productPrice = document.querySelector('.product-price');
const prod = document.querySelector('.products');

const products = [
  {
    name: 'Iphone 12',
    price: 50000,
  },
  {
    name: 'Iphone 13',
    price: 60000,
  },
];

form.addEventListener('submit', function (event) {
  event.preventDefault();
  const newProduct = {
    name: productName.value,
    price: Number(productPrice.value),
  };
  products.push(newProduct);
  showProducts();
  clearInputs();
});

function clearInputs() {
  productName.value = '';
  productPrice.value = '';
}

function showProducts() {
  prod.innerHTML = '';
  products.forEach(function (products, index) {
    prod.innerHTML += `<div class ="product-card">
    <p class="product-card-name">${products.name}</p>
    <p class="product-card-price">${products.price}</p>
    <button class = "delete-btn" id = "${index}"> X </button>
    </div>`;
  });
  onCardHover();
  deleteProduct();
}
showProducts();

function onCardHover() {
  const productsCards = document.querySelectorAll('.product-card');
  productsCards.forEach(function (card) {
    card.addEventListener('mouseover', function () {
      card.querySelector('.delete-btn').style.display = 'block';
    });
    card.addEventListener('mouseout', function () {
      card.querySelector('.delete-btn').style.display = 'none';
    });
  });
}

function deleteProduct() {
  const deleteBtns = document.querySelectorAll('.delete-btn');
  deleteBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const currentId = btn.id;
      products.splice(currentId, 1);
      btn.parentElement.remove();
      showProducts();
    });
  });
}

/*
    for - низкоуровневый цикл. задаем параметры для того, чтобы пройтись циклом по массиву
        инициализация, условие, шаг
    
    forEach - высокоуровневый, больше похож на человеческий язык

    array.forEach(function(item, index, array) {
        console.log(item)
    })
    метод forEach вызовет переданную коллбек функцию столько раз сколько элементов в массиве array?
        при этом функция принимает 3 параметра
        1. item - каждый элемент в массиве. первый раз функция выполнится и получит первый элемент массива
            второй раз получить второй элемент массива и т д 
        2. index - это порядковые номер элемента в массиве array[0], array[1]
        3. array - это сам массив
*/
