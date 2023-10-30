// Find out the biggest number from three numbers

let number1, number2, number3;
number1 = 48;
number2 = 34;
number3 = 37;

if (number1 > number2 && number1 > number3) {
  console.log(`${number1} is biggest!`);
} else if (number2 > number1 && number2 > number3) {
  console.log(`${number2} is biggest!`);
} else {
  console.log(`${number3} is biggest!`);
}
