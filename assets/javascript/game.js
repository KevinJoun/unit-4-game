$(document).ready(function(){
var randomNumber;
// this function gets a random number between 19 and 120.
function randomTargetNumber(){
    return Math.floor(Math.random() * 102) + 19;
}
function randomJewelNumber(){
    
}
randomNumber = randomTargetNumber(); // this runs the function random() and returns the output of the function as the variable randomNumber
console.log(randomNumber); //logs the randomNumber
$("#targetNumber").html(randomNumber);


});