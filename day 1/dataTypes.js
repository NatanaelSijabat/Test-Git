// let counter = 120;

// // console.log(typeof counter);

// counter = " hi Javascript ";

// let strip = counter.trim();
// // console.log({ strip });

// // console.log(typeof counter);

// let str = "java script";

// // console.log(str.substring(5, 8));

// // console.log(str[6]);
// // console.log(str.charAt(1));

// let person = {
//   firstname: "john doe",
//   age: 30,
// };

// console.log({ age: person.age });

// let x = "10";

// console.log(+x);

// let weight = 90;
// weight = ++weight + 5;
// weight = weight++ + 5;
// console.log(weight);
// let counter1 = 100;

let weight = 70;
let height = 1.72;
let bmi = weight / (height * height);

let weightStatus;

if (bmi < 18.5) {
  weightStatus = "UnderWeight";
} else if (bmi >= 18.5 && bmi <= 24.9) {
  weightStatus = "Healthy Weight";
} else if (bmi >= 25 && bmi <= 29.9) {
  weightStatus = "OverWeight";
} else {
  weightStatus = "Obesity";
}

switch (true) {
  case bmi < 18.5:
    weightStatus = "UnderWeight";
    break;
  case bmi >= 18.5 && bmi <= 24.9:
    weightStatus = "Healthy Weight";
    break;
  case bmi >= 25 && bmi <= 29.9:
    weightStatus = "OverWeight";
    break;
  default:
    weightStatus = " Obesity";
}

// console.log({ weightStatus });

let nilai = 50;

let grade;
// if (nilai < 50) {
//   grade = "E";
// } else if (nilai >= 50 && nilai <= 59) {
//   grade = "D";
// } else if (nilai >= 60 && nilai <= 69) {
//   grade = "C";
// } else if (nilai >= 70 && nilai <= 74) {
//   grade = "C+";
// } else if (nilai >= 75 && nilai <= 79) {
//   grade = "B";
// } else if (nilai >= 80 && nilai <= 89) {
//   grade = "B+";
// } else {
//   grade = "A";
// }
// console.log(grade);

// let speed = 50;
// let msg = speed >= 120 ? "Too Fast" : speed >= 80 ? "Fast" : "Oke";

// console.log(msg);

switch (true) {
  case nilai < 50:
    grade = "E";
    break;
  case nilai >= 50 && nilai <= 59:
    grade = "D";
    break;
  case nilai >= 60 && nilai <= 69:
    grade = "C";
    break;
  case nilai >= 70 && nilai <= 74:
    grade = "C+";
    break;
  case nilai >= 75 && nilai <= 79:
    grade = "B";
    break;
  case nilai >= 80 && nilai <= 89:
    grade = "B+";
    break;
  default:
    grade = "A";
}

console.log({ grade });
