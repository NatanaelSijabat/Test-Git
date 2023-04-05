const getAntri = (nomor, cb) => {
  setTimeout(() => {
    setTimeout(() => {
      console.log(nomor);
      let paket = cb(nomor, "B");
      console.log(paket);
      setTimeout(() => {
        let bill = tagihan(paket);
        console.log(bill);
      }, 1000);
    }, 2000);
  }, 3000);
};

const pilihPaket = (nomor, paket) => {
  setTimeout(() => {
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
  }, 2000);
};

const tagihan = (paket) => {
  setTimeout(() => {
    if (paket === "KFC Paket A") {
      return 25000;
    } else if (paket === "KFC Paket B") {
      return 26000;
    } else {
      return "Belum Ada Pesanan";
    }
  }, 1000);
};

getAntri(10, pilihPaket);
