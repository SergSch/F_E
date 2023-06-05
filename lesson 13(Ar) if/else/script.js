'use strict';

// const a = +prompt('Year ');
// const b = 2023 - a;
// console.log(`Your age is ${b}`);

// const a = +prompt('Number');
// if (a > 100) {
//   console.log('More');
// } else if (a < 100) {
//   console.log('Less');
// } else {
//   console.log('equal');
// }

// const a = +prompt('Year of birthday');
// const b = 2023 - a;
// if (b > 18) {
//   console.log('Welcome');
// } else if (b < 18) {
//   console.log('Stop');
// } else {
//   console.log('wait');
// }

const a = +prompt('Price');
if (a > 1500) {
  console.log('Your discount is 20%');
} else if (a > 1000) {
  console.log('Your discount is 15%');
} else {
  console.log('No discount');
}
