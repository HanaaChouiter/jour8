// console.log(process.argv);

function multiply(num){
    for(i=0; i<11; i++){
        // console.log(i)
        var resultat = num*i;
        console.log(`${num} x ${i} = ${resultat}`)
      
    }  // return `${num} x ${i} = ${resultat}`
     if(num===""){
        return "error"
    }
}

// var result = multiply(3)
// console.log(result)

// console.log(multiply(3))
console.log(multiply(parseInt(process.argv[2])))


module.exports = {
    multiply,
}