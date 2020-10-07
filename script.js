let massMark = 40;
let massJohn = 75;
let heightMark =1.60;
let heightJohn = 1.50;
let BMIMark = massMark/(heightMark*heightMark);
let BMIJohn = massJohn/(heightJohn*heightJohn);
//print this bmi to the console
 
const higherBMI = BMIMark>BMIJohn;//this gives "true"
console.log(`Is Mark's BMI is higher than John's? Answer is ${higherBMI} .Because Mark's BMI is ${BMIMark} and John's BMI is ${BMIJohn}`);
if (BMIMark>BMIJohn) {
console.log("Mark wins");
} else {
    console.log("John wins");
}
 console.log(BMIJohn.toFixed(2));
 console.log(BMIMark.toFixed(2));