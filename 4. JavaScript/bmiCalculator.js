//simple solution using fn and formula 

function bmiCalculator(weight, height) {
  var myBmi = weight / (Math.pow(height,2));
  return Math.round(myBmi);
}

var bmi = bmiCalculator(75, 1.87);
console.log(bmi);


// same problem using comparators 
function bmiCalculator (weight, height) {
    var bmi = weight / Math.pow(height, 2);
    var interpretation = "";  // FYI declaring string variable 

   
    if(bmi<18.5){
        interpretation = "Your BMI is " + bmi + ", " + "so you are underweight.";
    } else if (bmi>=18.5 && bmi<24.9) {
        interpretation = "Your BMI is " + bmi + ", " + "so you have a normal weight.";
    } else if (bmi>=24.9) {
        interpretation = "Your BMI is " + bmi + ", " + "so you are overweight.";
    }  
    return interpretation;
}
console.log(bmiCalculator(45,6));
// the above fn call is typed by me and it is correct . FYI 
