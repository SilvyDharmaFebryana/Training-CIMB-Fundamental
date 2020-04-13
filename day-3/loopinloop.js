
//================== segitiga siku kanan ====================
let result = ''
for (let i=0 ; i<5 ; i++) { //untuk nambah ke bawah
    result += '*'
    for (let j=0; j<i ; j++){ //untuk nambah kesamping
        if (j == i) {
         break
        }
        result += '*'
    }
     result += '\n' //enter
}
console.log(result)



//=================== segitiga siku kiri =====================

// let result = ''
// for (let i=0 ; i<5 ; i++) { //untuk nambah ke bawah
//     //let result = ''
//     for (let j=4 ; j<5 ; j++) { //untuk nambah kesamping
//         result += '*'
//     }
//     console.log(result)
// }
