const reverseString = (str) => {
    //Implementación
    if(typeof(str) === 'string'){
        if(str.length > 1 || str.length < 15 ){
            return str.split("").reverse().join("");
        }
        return console.log("Error")
    }
    return console.log("Error");
    
}



module.exports = {
    reverseString
}