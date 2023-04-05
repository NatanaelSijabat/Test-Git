const fnRest = (x, y, ...arr) => {
  let str = "";
  for (let x of arr) {
    str += x + " ";
  }
  console.log(x, y, str);
};

// fnRest("rest", "parameter", { firstName: "add", lastName: "oke", umur: 90 });
fnRest("rest", "parameter", "first");
// fnRest();
