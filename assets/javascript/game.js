$(document).ready(function(){
var randomTargetNumber;
var randomJewelNumber1;
var randomJewelNumber2;
var randomJewelNumber3;
var randomJewelNumber4;
var score = 0;
var wins = 0;
var losses = 0;

function randomTargetNumberGen(){
    return Math.floor(Math.random() * 102) + 19;
}
function randomJewelNumber(){
    return Math.floor(Math.random() * 12) + 1;
}
function start(){
    randomJewelNumber1 = randomJewelNumber();
    randomJewelNumber2 = randomJewelNumber();
    randomJewelNumber3 = randomJewelNumber();
    randomJewelNumber4 = randomJewelNumber();
    randomTargetNumber = randomTargetNumberGen();
    score = 0;
    $("#targetNumber").text(randomTargetNumber);
}
function ifElse(){
    if(score === randomTargetNumber){
    wins++;
    $("#insert").html("<p>You Win!</p>")
    $("#wins").text(wins);
    $("#score").text("0");
    start();
} else if(score > randomTargetNumber){
    losses++;
    $("#insert").html("<p>You Lose!</p>")
    $("#losses").text(losses);
    $("#score").text("0");
    start();
}}
start();
console.log(randomJewelNumber1);
console.log(randomJewelNumber2);
console.log(randomJewelNumber3);
console.log(randomJewelNumber4); 
console.log(randomTargetNumber); 
$("#jewel1").on("click", function(){
    score += randomJewelNumber1;
    $("#score").text(score);
    ifElse();
});
$("#jewel2").on("click", function(){
    score += randomJewelNumber2;
    $("#score").text(score);
    ifElse();
});
$("#jewel3").on("click", function(){
    score += randomJewelNumber3;
    $("#score").text(score);
    ifElse();
});
$("#jewel4").on("click", function(){
    score += randomJewelNumber4;
    $("#score").text(score);
    ifElse();
});
}); 