const startEngine = (cb) => {
  setTimeout(() => {
    console.log("Enggine Start");
    setTimeout(() => {
      cb(1);
      setTimeout(() => {
        goCar();
        setTimeout(() => {
          stopCar();
          setTimeout(() => {
            shutdown();
          }, 3000);
        });
      }, 5000);
    }, 4000);
  }, 5000);
};

const changeGear = (gear) => {
  setTimeout(() => {
    console.log(`Masukkan gigi ${gear} to move start`);
  }, 2000);
};

const goCar = () => {
  setTimeout(() => {
    console.log("Mulai Berjalan");
  }, 1000);
};

const stopCar = () => {
  setTimeout(() => {
    console.log("Mobil Berhenti");
  }, 3000);
};

const shutdown = () => {
  setTimeout(() => {
    console.log("Mesin Mobil Dimatikan");
  }, 5000);
};

// --- Callback Function ---
// const DriveCar = (cb) => {
//   cb();
//   changeGear(1);
//   goCar();
//   stopCar();
//   shutdown();
// };
// DriveCar(startEngine);

startEngine(changeGear);
