var randomNumber;
// this function gets a random number between 19 and 120.
function random(){
    return Math.floor(Math.random() * 102) + 19;
}
randomNumber = random(); // this runs the function random() and assigns the output of the function to randomNumber.
console.log(randomNumber); //logs the randomNumber
