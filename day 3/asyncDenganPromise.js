const getAntri = (nomor) => {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      resolve(nomor);
    }, 9000)
  );
};

const pilihPaket = (nomor, paket) => {
  const result = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (nomor <= 0 || isNaN(nomor)) {
        reject("Silahkan Antri");
      }

      if (paket === "A") {
        resolve("KFC Paket A");
      } else {
        resolve("KFC Paket B");
      }
    }, 2000);
  });
  return result;
};

const tagihan = (paket) => {
  const res = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (paket === "KFC Paket A") {
        resolve(25000);
      } else if (paket === "KFC Paket B") {
        resolve(26000);
      } else {
        resolve("Belum Ada Pesanan");
      }
    }, 1000);
  });
  return res;
};

// const result = getAntri(10)
//   .then((nomor) => {
//     console.log(nomor);
//     return pilihPaket(nomor, "A");
//   })
//   .then((paket) => {
//     console.log(paket);
//     return tagihan(paket);
//   })
//   .then((bill) => {
//     console.log(bill);
//   })
//   .catch((err) => {
//     console.log(err.name, err.message);
//   });

//
const startEngine = () => {
  return new Promise((resolve, rejet) => {
    setTimeout(() => {
      resolve("Enggine Start");
    }, 40000);
  });
};

const changeGear = (gear) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Masukkan gigi ${gear} to move start`);
    }, 2000);
  });
};

const goCar = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Mulai Berjalan");
    }, 1000);
  });
};

const stopCar = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Mobil Berhenti");
    }, 3000);
  });
};

const shutdown = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Mesin Mobil Dimatikan");
    }, 5000);
  });
};

startEngine()
  .then((start) => {
    console.log(start);
    return changeGear(1);
  })
  .then((gear) => {
    console.log(gear);
    return goCar();
  })
  .then((go) => {
    console.log(go);
    return stopCar();
  })
  .then((stop) => {
    console.log(stop);
    return shutdown();
  })
  .then((mati) => {
    console.log(mati);
  })
  .catch((err) => {
    console.log(err.name, err.message);
  });
