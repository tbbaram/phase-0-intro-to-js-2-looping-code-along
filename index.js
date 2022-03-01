// Code your solutions in this file

function writeCards(nameArray, type) {
    let thankYou = []; 
    for (let i = 0; i <nameArray.length; i++) {
        thankYou.push(`Thank you, ${nameArray[i]}, for the wonderful ${type} gift!`);
    }
    return thankYou;
}

function countDown() {

var countDown = 11; 
    while (countDown > 0) {
        countDown--
        console.log(countDown);
    }
}