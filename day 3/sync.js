const getAntri = (nomor) => {
  return nomor;
};

const pilihPaket = (nomor, paket) => {
  try {
    if (nomor <= 0 || isNaN(nomor)) {
      throw "Silahkan Antri";
    }

    if (paket === "A") {
      return "KFC Paket A";
    } else {
      return "KFC Paket B";
    }
  } catch (error) {
    return error;
  }
};

const tagihan = (paket) => {
  if (paket === "KFC Paket A") {
    return 25000;
  } else if (paket === "KFC Paket B") {
    return 26000;
  } else {
    return "Belum Ada Pesanan";
  }
};

let nomor = getAntri(10);
let paket = pilihPaket(nomor, "A");
let bill = tagihan(paket);

console.log(nomor);
console.log(paket);
console.log(bill);
