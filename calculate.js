
console.log(process.argv);

function calculate(num1, num2, operateur){
     
    if(operateur === "+"){
        return num1 + num2
    }else if(operateur === "-"){
        return num1 - num2
    }else if (operateur === "*"){
        return num1 * num2
    }else if(operateur === "/"){
        return num1 / num2
    }else if(operateur === "%"){
        return num1 % num2
    }else{
        return "error"
    }
}


console.log(calculate(parseInt(process.argv[2]),parseInt(process.argv[3]),(process.argv[4] )))

