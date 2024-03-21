function calculateBMI() {
  const age = parseFloat(document.getElementById("age").value);
  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value);

  const bmi = weight / ((height / 100) * (height / 100));

  let result = "BMI: " + bmi.toFixed(2) + "<br>";

  if (bmi < 18.5) {
    result += "Og'irligi kam";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    result += "Normal og'irlik";
  } else if (bmi >= 25 && bmi <= 29.9) {
    result += "Semizlikdan oldingi";
  } else if (bmi >= 30 && bmi <= 34.9) {
    result += "Semizlik I sinf";
  } else if (bmi >= 35 && bmi <= 39.9) {
    result += "Semizlik II sinf";
  } else {
    result += "Og'ir";
  }

  document.getElementById("result").innerHTML = result;
}
