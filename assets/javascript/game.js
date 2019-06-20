$(document).ready(function(){
var randomTargetNumber;
var randomJewelNumber1;
var randomJewelNumber2;
var randomJewelNumber3;
var randomJewelNumber4;
// this function gets a random number between 19 and 120.
function randomTargetNumber(){
    return Math.floor(Math.random() * 102) + 19;
}
function randomJewelNumber(){
    return Math.floor(Math.random() * 12) + 1;
}
randomJewelNumber1 = randomJewelNumber();
randomJewelNumber2 = randomJewelNumber();
randomJewelNumber3 = randomJewelNumber();
randomJewelNumber4 = randomJewelNumber();
console.log(randomJewelNumber1);
console.log(randomJewelNumber2);
console.log(randomJewelNumber3);
console.log(randomJewelNumber4);
randomTargetNumber = randomTargetNumber(); // this runs the function random() and returns the output of the function as the variable randomTargetNumber
console.log(randomTargetNumber); //logs the randomTargetNumber
$("#targetNumber").html(randomTargetNumber);

}); 