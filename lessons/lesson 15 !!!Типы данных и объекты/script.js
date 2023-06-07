// const arr = [1, 34, 'Hello', true];
// console.log(arr);

// const user = {
//   email: 'test@mail.ua',
//   name: 'Serg',
//   age: 41,
//   hobbies: ['football', 'html'],
//   info: {
//     descr: 'lorem',
//   },
// };
// console.log(user);
// console.log(user.name);
// console.log(user.hobbies[0]);

// const obj = {
//   tomato: 5,
//   bread: 2,
//   juice: 1,
//   name: 'Серж',
// };
// console.log(obj.name);

// const products = [
//   {
//     name: 'Iphone13',
//     price: 1000,
//   },
//   {
//     name: 'Iphone14',
//     price: 1200,
//   },
//   {
//     name: 'Iphone15',
//     price: 2000,
//   },
// ];
// let a = 0;
// for (let i = 0; i < products.length; i++) {
//   a = products[i].price + a;
// }
// console.log(a);
// for (let i = 0; i < products.length; i++) {
//   console.log(products[i].name);
// }

// const users = [
//   {
//     name: 'Yulia',
//     email: 'yulia@mail.ua',
//     age: 23,
//   },
//   {
//     name: 'Serg',
//     email: 'seer@mail.ua',
//     age: 24,
//   },
//   {
//     name: 'Alex',
//     email: 'alex@mail.ua',
//     age: 33,
//   },
// ];
// for (let i = 0; i < users.length; i++) {
//   console.log(
//     `Your email is ${users[i].email} and your age is ${users[i].age}`
//   );
// }

// const users = [
//   {
//     name: 'Yulia',
//     email: 'yulia@mail.ua',
//     age: 15,
//   },
//   {
//     name: 'Serg',
//     email: 'seer@mail.ua',
//     age: 24,
//   },
//   {
//     name: 'Alex',
//     email: 'alex@mail.ua',
//     age: 33,
//   },
// ];

// for (let i = 0; i < users.length; i++) {
//   if (users[i].age > 15) {
//     console.log(users[i].name);
//   }
// }

// const users = [
//   {
//     name: 'Yulia',
//     email: 'yulia@mail.ua',
//     age: 15,
//   },
//   {
//     name: 'Serg',
//     email: 'seer@mail.ua',
//     age: 24,
//   },
//   {
//     name: 'Alex',
//     email: 'alex@mail.ua',
//     age: 33,
//   },
// ];

// let newArr = [];
// for (let i = 0; i < users.length; i++) {
//   if (users[i].age > 18) {
//     newArr.push(users[i].name);
//   }
// }
// console.log(newArr);

const users = [
  {
    name: 'Yulia',
    email: 'yulia@mail.ua',
    age: 15,
  },
  {
    name: 'Serg',
    email: 'seer@mail.ua',
    age: 24,
  },
  {
    name: 'Alex',
    email: 'alex@mail.ua',
    age: 33,
  },
];

const newArr = []; //
for (let i = 0; i < users.length; i++) {
  if (users[i].age > 18) {
    newArr.push({ login: users[i].name, age: users[i].age }); // push - метод который добавляет элемент в конец массива
  }
}
console.log(newArr);
