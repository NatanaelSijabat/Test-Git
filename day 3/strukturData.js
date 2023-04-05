let buah = ["mangga", "jeruk", "anggur"];

// buah.push("durian");
// console.log(buah);

buah.pop();
// console.log(buah);

buah.unshift("durian"); //menambah di index awal
// console.log(buah);

buah.shift(); //menghapus di index awal
// console.log(buah);

let person = [
  {
    nama: "Alex",
    alamat: "Jakarta",
  },
  {
    nama: "Doe",
    alamat: "Bogor",
  },
  {
    nama: "John",
    alamat: "Malang",
  },
  {
    nama: "Agnes",
    alamat: "Semarang",
  },
  {
    nama: "Joni",
    alamat: "Batam",
  },
];

person.push({ nama: "admin", alamat: "Bandung" });
// console.log(person);

const personnew = person.forEach((e) => {
  return `${e.alamat}`;
});
// console.log(personnew);

const personp = person.map((e) => {
  return `${e.alamat}`;
});
// console.log(personp);
