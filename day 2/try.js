const Grade = (nilai) => {
  let grade;
  if (nilai >= 90 && nilai <= 100) {
    grade = "A";
  } else if (nilai >= 80 && nilai <= 89) {
    grade = "B+";
  } else if (nilai >= 75 && nilai <= 79) {
    grade = "B";
  } else if (nilai >= 70 && nilai <= 74) {
    grade = "C+";
  } else if (nilai >= 60 && nilai <= 69) {
    grade = "C";
  } else if (nilai >= 50 && nilai <= 59) {
    grade = "D";
  } else if (nilai < 50) {
    grade = "E";
  } else {
    grade = "Masukkan Nilai";
  }

  return grade;
};

const checkValue = (value) => {
  try {
    if (value != null) {
      return value;
    } else {
      throw new ReferenceError("Masukkan Value");
    }
  } catch (error) {
    return error.message;
  }
};

try {
  console.log(checkValue(Grade(100)));
} catch (error) {
  throw error;
}
