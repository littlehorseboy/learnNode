function BMI(name) {
  let BMIResult = 0;

  function count_BMI(weight, height) {
    const mass = parseInt(weight);
    const counter = parseInt(height) / 100;

    BMIResult = mass / (counter * counter);

    console.log(`${name}, your BMI is ${BMIResult}.`);

    return BMIResult;
  }

  return count_BMI;
}

const Wesley_BMI = BMI('Wesley');
const Fred_BMI = BMI('Fred'); 

Wesley_BMI(75, 175);
Fred_BMI(74, 180);
