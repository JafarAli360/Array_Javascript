const sortCarByYearAscendingly = function (cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];

  // Tulis code-mu disini
  for (let i = 0; i < result.length; i++) {
    for (let string = 0; string < result.length - 1; string++) {
      if (result[string].year > result[string + 1].year) {
        const temp = result[string];
        result[string] = result[string + 1];
        result[string + 1] = temp;
      }
    }
  }

  // Rubah code ini dengan array hasil sorting secara ascending
  console.log(result);
  return result;
};
