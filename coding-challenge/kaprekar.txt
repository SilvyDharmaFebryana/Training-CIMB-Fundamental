function kaprekarConst(angka, count) {
    if (typeof count == 'undefined') 
        count = 1;

    if( angka === 0 )
        return "angka tidak valid"

    var arrNum= angka.toString().split("").filter(function(a,b) {return a != b});
    if(count < 2 && arrNum.length < 4 && arrNum.length > 4)
        return "angka tidak valid";

    var highNumber = angka.toString().split("").sort(function (a,b) { return b-a }).join("");
    var lowNumber = angka.toString().split("").sort().join("");

    // if (lowNumber.includes(0)){
    //     lowNumber = angka + 0
    // } 
    var hasilNumber = highNumber - lowNumber;

    if (hasilNumber == 6174) {
        return "Melakukan " + count + " iterasi agar mendapatkan angka 6174.";
    }

    return kaprekarConst(hasilNumber, count +1);
}

console.log(kaprekarConst(3456))