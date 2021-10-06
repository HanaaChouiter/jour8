var multiply = require("./multiply.js").multiply

function addition(num){
    for(i=1; i<11; i++){
        // console.log(i)
        var resultat = num+i;
        console.log(`${num} + ${i} = ${resultat}`)
    } 
}

console.log(addition(parseInt(process.argv[2])))

module.exports = {
  addition,
  }