// const segitigaTerbalik = (tinggi) => {
//   let i = tinggi;
//   let output = "";

//   while (i >= 1) {
//     let j = tinggi - i;
//     let k = 1;
//     while (j > 0) {
//       output += " ";
//       j--;
//     }
//     while (k <= 2 * i - 1) {
//       output += k % 2 === 0 ? " " : k;
//       k++;
//     }
//     output += "\n";
//     i--;
//   }
//   return output;
// };

// const segitigaTerbalik = (tinggi) => {
//   let i = tinggi;
//   let output = " ";

//   while (i >= 1) {
//     let j = tinggi - i;
//     let k = 1;
//     while (j > 0) {
//       output += " ";
//       j--;
//     }
//     while (k <= 2 * i - 1) {
//       output += k % 2 === 0 ? " " : k;
//       k++;
//     }
//     output += "\n";
//     i--;
//   }
//   return output;
// };

// console.log(segitigaTerbalik(10));

// console.log(start.repeat(5));
// console.log(start.repeat(4));
// console.log(start.repeat(3));
// console.log(start.repeat(2));
// console.log(start.repeat(1));

let space = " ";
let start = "*";
// let start1 = "2";
// console.log(space.repeat(1) + start.repeat(5) + start.repeat(4));
// console.log(space.repeat(2) + start.repeat(4) + start.repeat(3));
// console.log(space.repeat(3) + start.repeat(3) + start.repeat(2));
// console.log(space.repeat(4) + start.repeat(2) + start.repeat(1));
// console.log(space.repeat(5) + start.repeat(1) + start.repeat(0));

// === with bintang ===
const segitigaTerbalik = (number) => {
  let res = "";
  let i;
  let j;
  for (i = number, j = number - 1; i >= 0, j >= 0; i -= 1, j -= 1) {
    res += `${space.repeat(number - i)}${start.repeat(i)}${start.repeat(j)}\n`;
  }
  return res;
};
console.log(segitigaTerbalik(100));

// const arr = [1, 3, 5, 7, 9];
// for (let i in arr) {
//   console.log(arr[i]);
// }
// arr.forEach((e) => {
//   console.log(e);
// });

// const segitigaTerbalik = (number) => {
//   let res = "";
//   let data = "1";
//   for (
//     i = number, j = number - 1, k = 1;
//     i >= 1, j >= 0, k <= number;
//     i -= 1, j -= 1, k += 2
//   ) {
//     res += `${space.repeat(number - i)}${data.repeat(i)}${data.repeat(j)}\n`;
//   }
//   return res;
// };

// const ganjil = () => {
//   let res = "";

//   for (i = 1; i <= 11; i += 2) {
//     res += `${i} `;
//   }
//   res = res.split(" ");
//   return { res };
// };

// console.log(ganjil());
// console.log(segitigaTerbalik(5));
