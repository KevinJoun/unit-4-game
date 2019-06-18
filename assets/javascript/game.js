var randomLetter;
function random(min, max){
    return Math.floor(Math.random() * (max - min) + min );
}
random(19,121);
randomLetter = random();

console.log(randomLetter);