const getAntri = (nomor) => {
  setTimeout(() => {
    console.log(nomor);
    return nomor;
  }, 3000);
};

const pilihPaket = (nomor, paket) => {
  setTimeout(() => {
    try {
      if (nomor <= 0 || isNaN(nomor)) {
        console.log("Silahkan Antri");
        throw "Silahkan Antri";
      }

      if (paket === "A") {
        console.log("KFC Paket A");
        return "KFC Paket A";
      } else {
        console.log("KFC Paket B");
        return "KFC Paket B";
      }
    } catch (error) {
      console.log(error);
      return error;
    }
  }, 2000);
};

const tagihan = (paket) => {
  setTimeout(() => {
    if (paket === "KFC Paket A") {
      console.log(25000);
      return 25000;
    } else if (paket === "KFC Paket B") {
      console.log(26000);
      return 26000;
    } else {
      console.log("Belum Ada Pesanan");
      return "Belum Ada Pesanan";
    }
  }, 1000);
};

let nomor = getAntri(10);
let paket = pilihPaket(nomor, "A");
let bill = tagihan(paket);

console.log(nomor);
console.log(paket);
console.log(bill);
