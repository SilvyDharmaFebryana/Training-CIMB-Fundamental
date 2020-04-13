function kaprekarConstant(num, count) {
    if (typeof count == "undefined") 
        count = 1;

    if(typeof num === 'null' )
        return "Please enter a valid number"

    var numArray= num.toString().split("").filter(function(a,b) {return a != b});
     if(count < 2 && numArray.length < 4)
        return "Please enter a valid number";

    var highNumber = num.toString().split("").sort(function (a,b) {
        return b-a }).join("");
    var lowNumber = num.toString().split("").sort().join("");
    var dNumber = highNumber - lowNumber;

    if (dNumber === 6174) {
        return "It took " + count + " tries to get to 6174.";
    }

    return kaprekarConstant(dNumber, count +1);
}

console.log(kaprekarConstant(8765))