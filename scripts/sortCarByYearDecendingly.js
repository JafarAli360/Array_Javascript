const sortCarByYearDescendingly = function (cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];

  // Tulis code-mu disini
  for (let i = 0; i < result.length; i++) {
    for (let array = 0; array < result.length - 1; array++) {
      if (result[array].year < result[array + 1].year) {
        const temp = result[array];
        result[array] = result[array + 1];
        result[array + 1] = temp;
      }
    }
  }
  // Rubah code ini dengan array hasil sorting secara descending
  console.log(result);
  return result;
};
