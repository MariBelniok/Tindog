//Create your function below this line.
//The first parameter should be the weight and the second should be the height
function bmiCalculator (weight, height){
    var bmiCalc = weight / Math.pow(height, 2) //Math.pow serve para elevar um valor a outro
    return Math.round(bmiCalc); //Math.round para arredondar
}
/* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:
bmi should equal 20 when it's rounded to the nearest whole number.

*/
console.log(bmiCalculator(70, 1.72))
