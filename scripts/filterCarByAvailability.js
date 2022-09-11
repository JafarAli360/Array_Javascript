const filterCarByAvailability = function (cars) {
  console.log(cars);

  // Tempat penampungan hasil
  let result = [];

  // Tulis code-mu disini
  for (let i = 0; i < cars.length; i++) {
    if (cars[i].available) {
      result.push(cars[i]);
    }
  }
  console.log(result);

  // Rubah code ini dengan array hasil filter berdasarkan availablity
  return result;
};
